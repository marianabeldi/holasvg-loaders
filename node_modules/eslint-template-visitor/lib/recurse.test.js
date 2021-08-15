
import test from 'ava';
import sinon from 'sinon';

import espree from 'espree';

import recurse from './recurse';

test('recurse.visit', t => {
	const ast = espree.parse(`
		foo.parentNode.removeChild(foo);
		foo.parentNode.removeChild(bar);
	`);

	const spy = sinon.spy();

	recurse.visit(ast, {
		MemberExpression: spy,
	});

	t.is(spy.callCount, 4);
});
