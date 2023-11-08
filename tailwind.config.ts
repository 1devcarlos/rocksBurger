import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero-bg': 'url("/hero-bg.jpg")',
			},
			colors: {
				'#000000': 'dark',
				'#0b0a0a': 'darkless',
				'#d9d9d9': 'gray',
				'#f4c64e': 'milkyellow',
			},
		},
	},
	plugins: [],
};
export default config;
