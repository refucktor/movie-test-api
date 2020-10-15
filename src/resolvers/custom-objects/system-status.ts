import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class SystemStatus {
	@Field(() => String)
	uptime?: string;

	@Field(() => String)
	message?: string;

	@Field(() => Number)
	timestamp?: number;
}
