import { createConnection } from 'typeorm';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

import { Logger } from '@utils';

type SeedingOptions = { seeds: string[]; factories: string[] };
const defaultDBConnection = (): MongoConnectionOptions & SeedingOptions => ({
	type: 'mongodb',
	host: process.env.TYPEORM_HOST,
	port: Number.parseInt(process.env.TYPEORM_PORT || ''),
	username: process.env.TYPEORM_USERNAME,
	password: process.env.TYPEORM_PASSWORD,
	database: process.env.TYPEORM_DATABASE,
	synchronize: !!process.env.TYPEORM_SYNCHRONIZE,
	logging: JSON.parse(process.env.TYPEORM_LOGGING || 'false'),
	entities: ['src/models/**/*.ts'],
	subscribers: ['src/subscribers/**/*.ts'],
	migrations: ['src/database/migrations/**/*.ts'],
	seeds: ['src/database/seeds/**/*{.ts,.js}'],
	factories: ['src/database/factories/**/*{.ts,.js}'],
	migrationsRun: JSON.parse(process.env.TYPEORM_MIGRATIONS_RUN || 'false'),
	cli: {
		entitiesDir: 'src/models',
		subscribersDir: 'src/subscribers',
		migrationsDir: 'src/database/migrations',
	},
	useUnifiedTopology: true,
	authSource: process.env.TYPEORM_MONGODB_AUTH_SOURCE,
});

const connect = async (): Promise<void> => {
	try {
		const connectionOptions = TypeormSetup.defaultDBConnection();
		await createConnection(connectionOptions);
		Logger.info('Connection to Database established.');
	} catch (error) {
		Logger.error('Error connecting to the Database');
		Logger.error('Message:', error.message);
		Logger.info('Application shutting down');
		// eslint-disable-next-line unicorn/no-process-exit
		process.exit(1);
	}
};

const TypeormSetup = {
	connect,
	defaultDBConnection,
};

export default TypeormSetup;
