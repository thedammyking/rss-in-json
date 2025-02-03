import { dirname, resolve } from 'node:path';

import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsConfigPaths from 'vite-tsconfig-paths';

import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
	return {
		plugins: [
			checker({
				typescript: true,
			}),
			tsConfigPaths(),
		],

		build: {
			lib: {
				entry: resolve(__dirname, 'src/index.ts'),
				name: 'rss-in-json',
				fileName: (format) => `index.${format}.js`,
			},
			commonjsOptions: {
				include: /\/node_modules\//,
				esmExternals: false,
				requireReturnsDefault: 'namespace',
			},
			minify: 'terser',
		},
	};
});
