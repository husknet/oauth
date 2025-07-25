// vite.config.js

import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$routes: path.resolve('./src/routes')
		}
	},
	define: {
		// Makes VITE_ variables available in client-side code
		'process.env': process.env
	}
};

export default config;
