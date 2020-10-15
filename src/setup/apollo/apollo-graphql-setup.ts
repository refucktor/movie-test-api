import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import { SystemResolver } from '@resolvers';
import { Logger } from '@utils';

const ApolloGraphqlSetup = async (): Promise<boolean> => {
	const schema = await buildSchema({
		resolvers: [SystemResolver],
	});
	const apolloServer = new ApolloServer({
		schema,
		playground: true,
		introspection: true,
		engine: { reportSchema: JSON.parse(process.env.TYPEORM_SYNCHRONIZE || 'true') },
	});
	const port = Number.parseInt(process.env.PORT || '4000', 10);

	await apolloServer.listen(port);

	Logger.info(`Apollo server up and running in port: ${port}`);
	return Promise.resolve(true);
};

export default ApolloGraphqlSetup;
