module.exports = {
	env: {
		es6: true,
		jest: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
		'plugin:unicorn/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		tsconfigRootDir: __dirname,
	},
	plugins: ['@typescript-eslint', 'prettier', 'jest', 'import'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts'],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts'],
			},
			typescript: {
				alwaysTryTypes: true,
			},
		},
		'import/extensions': ['.js', '.ts'],
		'import/ignore': ['node_modules/*'],
	},

	rules: {
		'no-console': [
			2,
			{
				allow: ['warn', 'error', 'info'],
			},
		],

		//=== FUNCTION ===
		'@typescript-eslint/explicit-module-boundary-types': 0,

		//=== IMPORT ===
		'sort-imports': [
			1,
			{
				ignoreDeclarationSort: true,
			},
		],
		'import/order': [
			1,
			{
				alphabetize: {
					caseInsensitive: true,
					order: 'asc',
				},
				groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
				'newlines-between': 'always',
			},
		],

		//=== UNICORN ===
		'unicorn/filename-case': 0,
		'unicorn/prevent-abbreviations': 0,
		'unicorn/explicit-length-check': 0,
	},
};
