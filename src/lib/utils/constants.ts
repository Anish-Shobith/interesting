import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// __dirname is not defined in ES module scope.
const __dirname = dirname(fileURLToPath(import.meta.url));

export const rootDir = join(__dirname, '..', '..', '..');
export const srcDir = join(rootDir, 'src');

export const tableConfig = {
	border: {
		topBody: `─`,
		topJoin: `┬`,
		topLeft: `┌`,
		topRight: `┐`,

		bottomBody: `─`,
		bottomJoin: `┴`,
		bottomLeft: `└`,
		bottomRight: `┘`,

		bodyLeft: `│`,
		bodyRight: `│`,
		bodyJoin: `│`,

		joinBody: `─`,
		joinLeft: `├`,
		joinRight: `┤`,
		joinJoin: `┼`
	}
} as const;
