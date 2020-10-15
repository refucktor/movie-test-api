module.exports = {
	apps: [
		{
			name: 'movie-test-api',
			script: 'index.ts',
			exec_mode: 'fork',
			cwd: './src',
			interpreter: 'ts-node',
			interpreter_args: '--files --require tsconfig-paths/register',
		},
	],
};
