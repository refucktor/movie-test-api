import { DateTime, DurationObject } from 'luxon';

const relativeTime = (duration: DurationObject): string => {
	const result = DateTime.local().minus(duration).toRelative({ style: 'long' });
	return result || 'unknown';
};

const Common = {
	relativeTime,
};

export default Common;
