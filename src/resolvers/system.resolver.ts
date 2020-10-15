import { Query } from 'type-graphql';

import { Common } from '@utils';

import { SystemStatus } from './custom-objects';

export class SystemResolver {
	@Query(() => SystemStatus)
	async status(): Promise<SystemStatus> {
		const uptime = process.uptime();

		return Promise.resolve({
			uptime: Common.relativeTime({ seconds: uptime }),
			message: 'OK',
			timestamp: Date.now(),
		});
	}
}
