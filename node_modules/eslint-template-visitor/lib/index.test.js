
import test from 'ava';
import sinon from 'sinon';

import { omit, times } from 'ramda';

import espree from 'espree';

import fuzzProgram, { FuzzerState } from 'shift-fuzzer';
import shiftCodegen, { FormattedCodeGen } from 'shift-codegen';

import seedrandom from 'seedrandom';

import shiftToEspreeSafe from '../test/_shift-to-espree-safe';

import recurse from './recurse';

import eslintTemplateVisitor from '.';

const SEED = process.env.SEED || Math.random().toString(16).slice(2);

console.log(`
Reproduce the randomized fuzzing test by running:
\`\`\`bash
SEED=${JSON.stringify(SEED)} yarn ava
\`\`\`
`);

const parserOptions = {
	sourceType: 'module',
	ecmaVersion: 2018,
};

test.beforeEach(t => {
	t.context.rng = seedrandom(SEED);
});

test('mixing templates into a visitor', t => {
	const templates = eslintTemplateVisitor();

	const a = templates.variable();
	const template = templates.template`${a}.parentNode.removeChild(${a})`;

	const ast = espree.parse(`
		foo.parentNode.removeChild(foo);
		foo.parentNode.removeChild(bar);
	`);

	const visitorA = {
		[template]: sinon.spy(),
		CallExpression: sinon.spy(),
		MemberExpression: sinon.spy(),
	};

	const visitorB = {
		[template]: sinon.spy(),
		MemberExpression: sinon.spy(),
	};

	recurse.visit(ast, visitorA);
	recurse.visit(ast, templates.visitor(visitorB));

	t.false(visitorA[template].called);
	t.true(visitorA.CallExpression.called);
	t.true(visitorA.MemberExpression.called);

	t.true(visitorB[template].called);
	t.true(visitorB.MemberExpression.called);

	t.deepEqual(
		visitorA.MemberExpression.getCalls().map(call => call.args),
		visitorB.MemberExpression.getCalls().map(call => call.args),
	);

	t.deepEqual(
		visitorA.CallExpression.getCalls().map(call => call.args).slice(0, 1),
		visitorB[template].getCalls().map(call => call.args),
	);
});

test('variable matching', t => {
	const templates = eslintTemplateVisitor();

	const a = templates.variable();
	const template = templates.template`${a}.foo()`;

	const visitor = {
		[template]: sinon.spy(),
	};

	recurse.visit(espree.parse('foo.bar()'), templates.visitor(visitor));
	t.false(visitor[template].called);

	recurse.visit(espree.parse('bar.foo()'), templates.visitor(visitor));
	t.true(visitor[template].called);
});

const templateFoundInMacro = (t, templateSource, source, expectedToMatch = true) => {
	const templates = eslintTemplateVisitor();
	const template = templates.template(templateSource);

	const visitor = {
		[template]: sinon.spy(),
	};

	recurse.visit(espree.parse(source, parserOptions), templates.visitor(visitor));
	t.is(visitor[template].called, expectedToMatch);
};

templateFoundInMacro.title = (_, templateSource, source, expectedToMatch = true) => {
	return `\`${templateSource}\` ${expectedToMatch ? 'should be found in' : 'should not be found in'} \`${source}\``;
};

const templateMatchesMacro = (t, templateSource, source, expectedToMatch = true) => {
	const wrap = s => `uniqueEnoughIdentifier((${s}))`;
	templateFoundInMacro(t, wrap(templateSource), wrap(source), expectedToMatch);
};

templateMatchesMacro.title = (_, templateSource, source, expectedToMatch = true) => {
	return `\`${templateSource}\` ${expectedToMatch ? 'should match' : 'should not match'} \`${source}\``;
};

test(templateMatchesMacro, 'foo', 'bar', false);
test(templateMatchesMacro, 'foo', 'foo');

test(templateFoundInMacro, 'x', '[a, b, c]', false);
test(templateFoundInMacro, 'b', '[a, b, c]');

test(templateMatchesMacro, '1', '2', false);
test(templateMatchesMacro, '1', '1');

test(templateFoundInMacro, '9', '[1, 2, 3]', false);
test(templateFoundInMacro, '2', '[1, 2, 3]');

test(templateFoundInMacro, '({})', '({a:[]})', false);
test(templateFoundInMacro, '({})', '[{}]');

test(templateMatchesMacro, '(() => {})', '(function() {})', false);
test(templateMatchesMacro, '(( ) => { })', '(()=>{})');

test(templateMatchesMacro, 'NaN', '-NaN', false);
test(templateMatchesMacro, 'NaN', 'NaN');

test(templateFoundInMacro, 'NaN', 'NaN');
test(templateFoundInMacro, 'NaN', '-NaN');
test(templateFoundInMacro, '-NaN', '+NaN', false);
test(templateFoundInMacro, '+NaN', '-NaN', false);

test(templateMatchesMacro, '/a/', '/a/g', false);
test(templateMatchesMacro, '/a/', '/a/');

test(templateFoundInMacro, '/x/', 'foo(/x/)');
test(templateFoundInMacro, '/x/', 'foo(/x/y)', false);

test(templateMatchesMacro, '0', '+0', false);
test(templateMatchesMacro, '0', '-0', false);
test(templateMatchesMacro, '0', '0');

test(templateFoundInMacro, '0', '+0');
test(templateFoundInMacro, '0', '-0');
test(templateFoundInMacro, '0', '0');
test(templateFoundInMacro, '-0', '0', false);
test(templateFoundInMacro, '+0', '0', false);

test('variable values', t => {
	t.plan(6);

	const templates = eslintTemplateVisitor();

	const receiver = templates.variable();
	const method = templates.variable();
	const template = templates.template`${receiver}.${method}()`;

	const visitor = {
		[template](node) {
			const receiverNode = template.context.getMatch(receiver);
			const methodNode = template.context.getMatch(method);

			t.is(node.type, 'CallExpression');
			t.is(node.arguments.length, 0);

			t.is(receiverNode.type, 'Identifier');
			t.is(receiverNode.name, 'bar');

			t.is(methodNode.type, 'Identifier');
			t.is(methodNode.name, 'foo');
		},
	};

	// Should match
	recurse.visit(espree.parse('bar.foo()'), templates.visitor(visitor));

	// Should not match
	recurse.visit(espree.parse('bar.foo(argument)'), templates.visitor(visitor));
	recurse.visit(espree.parse('bar.foo(...arguments)', parserOptions), templates.visitor(visitor));
});

test('`spreadVariable` matching arguments', t => {
	const templates = eslintTemplateVisitor();

	const argumentsVariable = templates.spreadVariable();
	const template = templates.template`receiver.method(${argumentsVariable})`;

	const recordedArguments = [];

	const visitor = {
		[template](node) {
			const argumentNodes = template.context.getMatch(argumentsVariable);

			recordedArguments.push(argumentNodes);

			t.is(node.type, 'CallExpression');
			t.is(node.arguments, argumentNodes);
		},
	};

	recurse.visit(espree.parse('receiver.method()'), templates.visitor(visitor));

	t.is(recordedArguments.length, 1);
	t.deepEqual(recordedArguments[0], []);

	recurse.visit(espree.parse('receiver.method(onlyArgument)'), templates.visitor(visitor));

	t.is(recordedArguments.length, 2);
	t.is(recordedArguments[1].length, 1);

	recurse.visit(espree.parse('receiver.method(argument1, argument2)'), templates.visitor(visitor));

	t.is(recordedArguments.length, 3);
	t.is(recordedArguments[2].length, 2);

	recurse.visit(espree.parse('receiver.method(...arguments)', parserOptions), templates.visitor(visitor));

	t.is(recordedArguments.length, 4);
	t.is(recordedArguments[3].length, 1);
	t.is(recordedArguments[3][0].type, 'SpreadElement');
});

test('`spreadVariable` matching statements', t => {
	const templates = eslintTemplateVisitor({ parserOptions });

	const statementsVariable = templates.spreadVariable();
	const template = templates.template`() => {${statementsVariable}}`;

	const recordedStatements = [];

	const visitor = {
		[template](node) {
			const statementNodes = template.context.getMatch(statementsVariable);

			recordedStatements.push(statementNodes);

			t.is(node.type, 'ArrowFunctionExpression');
			t.is(node.body.type, 'BlockStatement');
			t.is(node.body.body, statementNodes);
		},
	};

	recurse.visit(espree.parse('() => {}', parserOptions), templates.visitor(visitor));

	t.is(recordedStatements.length, 1);
	t.deepEqual(recordedStatements[0], []);

	recurse.visit(espree.parse('() => { onlyStatement; }', parserOptions), templates.visitor(visitor));

	t.is(recordedStatements.length, 2);
	t.is(recordedStatements[1].length, 1);

	recurse.visit(espree.parse('() => { statement1; statement2 }', parserOptions), templates.visitor(visitor));

	t.is(recordedStatements.length, 3);
	t.is(recordedStatements[2].length, 2);
});

const omitLocation = omit([ 'start', 'end' ]);

test('variable unification', t => {
	t.plan(6);

	const templates = eslintTemplateVisitor();

	const x = templates.variable();
	const template = templates.template`${x} + ${x}`;

	const visitor = {
		[template](node) {
			t.is(node.type, 'BinaryExpression');

			const xNodes = template.context.getMatches(x);

			t.is(xNodes.length, 2);

			const [ x1, x2 ] = xNodes;

			t.is(x1.type, 'Identifier');
			t.is(x1.name, 'foo');

			t.not(x1, x2);
			t.deepEqual(omitLocation(x1), omitLocation(x2));
		},
	};

	// Should match
	recurse.visit(espree.parse('foo + foo'), templates.visitor(visitor));

	// Should not match
	recurse.visit(espree.parse('foo + bar'), templates.visitor(visitor));
	recurse.visit(espree.parse('bar + foo'), templates.visitor(visitor));
});

test('fuzzing', t => {
	const { rng } = t.context;

	const templates = eslintTemplateVisitor({ parserOptions });

	const totalTests = 2 ** 13;
	let skippedTests = 0;

	times(() => {
		const randomShiftAST = fuzzProgram(new FuzzerState({ rng, maxDepth: 3 }));
		const randomEspreeSafeShiftAST = shiftToEspreeSafe(randomShiftAST);
		const randomJS = shiftCodegen(randomEspreeSafeShiftAST, new FormattedCodeGen()) || '"empty program";';

		let randomTemplate;
		let randomAST;

		try {
			randomTemplate = templates.template(randomJS);
			randomAST = espree.parse(randomJS, parserOptions);
		} catch (error) {
			if (error.name === 'SyntaxError') {
				// TODO: `shiftToEspreeSafe` or `fuzzProgram` should do a better job ensuring program is valid
				console.warn('Ignored error:', error.name + ':', error.message);
				skippedTests += 1;
				return;
			}

			throw error;
		}

		const visitor = {
			[randomTemplate]: sinon.spy(),
		};

		recurse.visit(randomAST, templates.visitor(visitor));

		const { called } = visitor[randomTemplate];

		if (!called) {
			console.info(JSON.stringify({
				randomJS,
				randomEspreeSafeShiftAST,
				randomAST,
			}, null, 2));
		}

		t.true(called);
	}, totalTests);

	console.log({
		skippedTests,
		totalTests,
	});
});
