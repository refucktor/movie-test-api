const colorsPanel = {
	reset: '\u001B[0m',
	red: '\u001B[31m',
	green: '\u001B[32m',
	yellow: '\u001B[33m',
	blue: '\u001B[34m',
	cyan: '\u001B[36m',
};

/**
 * Create colored strings for the action title
 * @param color
 * @param action
 * @param surr
 * @returns {string}
 */
const coloredString = (color: string, action: string, surr = true): string =>
	`${color}${surr ? '(' : ''}${action}${surr ? ')' : ''}${colorsPanel.reset}`;

/**
 * Create action for logging with indented format
 * @param color
 * @param action
 * @param indent
 * @param chart
 * @returns {string}
 */
const indentedAction = (color: string, action: string, indent = 20, chart = ' '): string => {
	const coloredWord = coloredString(color, action);
	return coloredWord.padEnd(indent, chart);
};

/**
 * Create custom timestamp output for logging
 * @returns {string}
 */
const timeStamp = (): string =>
	new Date(Date.now()).toLocaleString('de-DE', {
		hour12: false,
		timeZoneName: 'short',
	});

const info = (...parameters: unknown[]): void => {
	const action = indentedAction(colorsPanel.cyan, 'INFO');
	return console.info(`[${timeStamp()}] ${action}`, ...parameters);
};

const warn = (...parameters: unknown[]): void => {
	const action = indentedAction(colorsPanel.yellow, 'WARN');
	return console.info(`[${timeStamp()}] ${action}`, ...parameters);
};

const error = (...parameters: unknown[]): void => {
	const action = indentedAction(colorsPanel.red, 'ERROR');
	return console.error(`[${timeStamp()}] ${action}`, ...parameters);
};

const success = (...parameters: unknown[]): void => {
	const action = indentedAction(colorsPanel.green, 'SUCCESS');
	return console.info(`[${timeStamp()}] ${action}`, ...parameters);
};

const Logger = {
	info,
	warn,
	error,
	success,
};

export default Logger;
