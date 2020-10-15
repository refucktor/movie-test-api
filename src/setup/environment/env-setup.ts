import nodePath from 'path';

import { path } from 'app-root-path';
import { load as loadEnvVar } from 'dotenv-extended';

const EnvSetup = (): void => {
	const envConfigPath = nodePath.join(path, 'configs/env');
	loadEnvVar({
		path: nodePath.join(envConfigPath, '.env'),
		defaults: nodePath.join(envConfigPath, '.env.defaults'),
		schema: nodePath.join(envConfigPath, '.env.schema'),
		errorOnMissing: true,
	});
};

export default EnvSetup;
