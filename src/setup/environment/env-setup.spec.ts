import dotenvExtended from 'dotenv-extended';
import { mocked } from 'ts-jest/utils';

import EnvSetup from './env-setup';

jest.mock('dotenv-extended');

describe('Environment Setup', () => {
	const mockedDotenvExtended = mocked(dotenvExtended, true);

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should load the environment variables', () => {
		const expectedObjectKeys = ['path', 'defaults', 'schema', 'errorOnMissing'];
		EnvSetup();
		expect(mockedDotenvExtended.load).toHaveBeenCalledTimes(1);
		expect(mockedDotenvExtended.load).toHaveBeenCalledWith(expect.toContainKeys(expectedObjectKeys));
	});
});
