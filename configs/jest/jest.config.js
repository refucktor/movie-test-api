/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('../../tsconfig');

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	rootDir: '../..',
	roots: ['<rootDir>/src/'],
	setupFilesAfterEnv: ['<rootDir>/configs/jest/jest-setup.ts'],
	testRegex: '^.+\\.(spec|test).(ts|js)$',
	transform: {
		'^.+\\.[tj]sx?$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			tsConfig: '<rootDir>/tsconfig.json',
			isolatedModules: true,
		},
	},
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
	reporters: ['default', ['jest-junit', { outputDirectory: '<rootDir>/.reports/jest' }]],
	coverageDirectory: '<rootDir>/.reports/jest/',
	coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/migrations/'],
	coverageReporters: ['text', 'lcov'],
	collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/build/**'],
	testResultsProcessor: 'jest-sonar-reporter',
};
