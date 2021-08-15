
const Multimap = require('multimap');

const espree = require('espree');

const { getMatchKeys } = require('./match-keys');
const { nodesPropertiesEqual } = require('./nodes-properties-equal');

const gensym = () => 'gensym' + Math.random().toString(16).slice(2);

class Variable {
	constructor() {
		this._id = gensym();
	}

	toString() {
		return this._id;
	}
}

class SpreadVariable extends Variable {}

class TemplateContext {
	constructor() {
		this._matches = new Multimap();
	}

	_pushVariableMatch(variableId, node) {
		this._matches.set(variableId, node);
	}

	getMatches(variable) {
		return this._matches.get(variable._id) || [];
	}

	getMatch(variable) {
		return this.getMatches(variable)[0];
	}
}

class Template {
	constructor(source, options) {
		const parserOptions = options.parserOptions || {
			ecmaVersion: 2018,
		};

		this._id = gensym();

		const { body: [ firstNode ] } = espree.parse(source, parserOptions);

		this._ast = firstNode.type === 'ExpressionStatement' ? firstNode.expression : firstNode;
	}

	toString() {
		return this._id;
	}
}

class TemplateManager {
	constructor(options = {}) {
		this._options = options;
		this._variables = new Map();
		this._templates = new Map();
	}

	_matchTemplate(handler, template, node, ...rest) {
		template.context = new TemplateContext();

		if (this._nodeMatches(template._ast, node, template.context)) {
			return handler(node, ...rest);
		}

		template.context = null;
	}

	_isNodeVariable(templateNode) {
		return templateNode.type === 'Identifier'
			&& this._variables.has(templateNode.name);
	}

	_getSpreadVariableNode(templateNode) {
		if (templateNode.type === 'ExpressionStatement') {
			templateNode = templateNode.expression;
		}

		if (!this._isNodeVariable(templateNode)) {
			return undefined;
		}

		const variable = this._variables.get(templateNode.name);

		return variable instanceof SpreadVariable
			? templateNode
			: undefined;
	}

	_nodeEquals(a, b) {
		const { visitorKeys, equalityKeys } = getMatchKeys(a);

		return visitorKeys.every(key => {
			return this._nodePropertyEquals(key, a, b);
		}) && equalityKeys.every(key => {
			return nodesPropertiesEqual(a, b, key);
		});
	}

	_everyNodeEquals(as, bs) {
		return as.length === bs.length
			&& as.every((a, index) => {
				const b = bs[index];
				return this._nodeEquals(a, b);
			});
	}

	_nodePropertyEquals(key, a, b) {
		if (Array.isArray(a[key])) {
			return a[key].length === b[key].length
				&& a[key].every((x, i) => this._nodeEquals(x, b[key][i]));
		}

		return this._nodeEquals(a[key], b[key]);
	}

	_nodeMatches(templateNode, node, context) {
		if (!templateNode || !node) {
			return templateNode === node;
		}

		if (this._isNodeVariable(templateNode)) {
			const variable = this._variables.get(templateNode.name);
			const previousMatches = context.getMatches(variable);

			if (previousMatches.every(previousMatchNode => this._nodeEquals(previousMatchNode, node))) {
				context._pushVariableMatch(templateNode.name, node);
				return true;
			}

			return false;
		}

		const { visitorKeys, equalityKeys } = getMatchKeys(templateNode);

		const matches = visitorKeys.every(key => {
			return this._nodePropertyMatches(key, templateNode, node, context);
		}) && equalityKeys.every(key => {
			return nodesPropertiesEqual(templateNode, node, key);
		});

		return matches;
	}

	_spreadVariableMatches(templateNode, nodes, context) {
		const variable = this._variables.get(templateNode.name);
		const previousMatches = context.getMatches(variable);

		if (previousMatches.every(previousMatchNodes => this._everyNodeEquals(previousMatchNodes, nodes))) {
			context._pushVariableMatch(templateNode.name, nodes);
			return true;
		}

		return false;
	}

	_nodePropertyMatches(key, templateNode, node, context) {
		if (Array.isArray(templateNode[key])) {
			if (!node[key]) {
				return false;
			}

			if (templateNode[key].length === 1) {
				const spreadVariableNode = this._getSpreadVariableNode(templateNode[key][0]);

				if (spreadVariableNode) {
					return this._spreadVariableMatches(spreadVariableNode, node[key], context);
				}
			}

			return templateNode[key].length === node[key].length
				&& templateNode[key].every((x, i) => this._nodeMatches(x, node[key][i], context));
		}

		return this._nodeMatches(templateNode[key], node[key], context);
	}

	variable() {
		const variable = new Variable();
		this._variables.set(variable._id, variable);
		return variable;
	}

	spreadVariable() {
		const variable = new SpreadVariable();
		this._variables.set(variable._id, variable);
		return variable;
	}

	template(strings, ...vars) {
		const source = typeof strings === 'string'
			? strings
			: strings.map((string, i) => string + (vars[i] || '')).join('');
		const template = new Template(source, this._options);
		this._templates.set(template._id, template);
		return template;
	}

	visitor(visitor) {
		const newVisitor = {};

		for (const key of Object.keys(visitor)) {
			const value = visitor[key];
			const template = this._templates.get(key);

			const newKey = template ? template._ast.type : key;

			const newValue = template ? (...args) => {
				return this._matchTemplate(value, template, ...args);
			} : value;

			newVisitor[newKey] = newVisitor[newKey] || [];
			newVisitor[newKey].push(newValue);
		}

		for (const newKey of Object.keys(newVisitor)) {
			const newValue = newVisitor[newKey];
			newVisitor[newKey] = newValue.length === 1 ? newValue[0] : (...args) => {
				newValue.forEach(handler => handler(...args));
			};
		}

		return newVisitor;
	}
}

const eslintTemplateVisitor = options => new TemplateManager(options);

module.exports = eslintTemplateVisitor;
