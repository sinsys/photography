import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import preprocess from 'svelte-preprocess';
import image from '@rollup/plugin-image';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv'
import { cleanEnv, str } from 'envalid'
const baseEnv = dotenv.config({ path: './.env' })

const env = cleanEnv(baseEnv.parsed, {
	// RUNTIME
	NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging']}),

	// API GW
  AMAZON_IDENTITY_POOL_ID: str(),
	AMAZON_USER_POOL_ID: str(),
	AMAZON_API_GW_ID: str(),
	AMAZON_STAGE_NAME: str(),
  AMAZON_REGION: str(),
  AMAZON_WEB_CLIENT_ID: str(),
	AMAZON_WEB_CLIENT_SECRET: str(),

	// APP
	APP_NAME: str()
})

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify('development'),
			'process.env._APP_ENV_': JSON.stringify(env)
		}),
		svelte({
      preprocess: preprocess(),
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		/* Images are encoded using base64, which means they will be 
		33% larger than the size on disk. You should therefore only 
		use this for small images where the convenience of having 
		them available on startup (e.g. rendering immediately to a 
		canvas without co-ordinating asynchronous loading of several images) 
		outweighs the cost. */
		image(),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production,
			rootDir: 'src'
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
