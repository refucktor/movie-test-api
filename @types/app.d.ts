export {};

declare global {
	interface AnyObject<V = unknown> {
		[key: string]: V;
	}
}
