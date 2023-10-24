import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
			  "2xl": "1400px",
			},
		  },
		extend: {
			backgroundImage: {
				'gradient-radial':
					'linear-gradient(82deg, var(--tw-gradient-stops))',
			},
			colors: {
				primary: {
					DEFAULT: '#1E1E1E',
					light: '#2E2E2E',
					dark: '#141414',
				},
				secondary: {
					DEFAULT: '#F2F2F2',
					light: '#F8F8F8',
					dark: '#EAEAEA',
				},
				accent: {
					DEFAULT: '#FFC107',
					light: '#FFCA28',
					dark: '#FFB300',
				},
				success: {
					DEFAULT: '#4CAF50',
					light: '#66BB6A',
					dark: '#43A047',
				},

				info: {
					DEFAULT: '#2196F3',
					light: '#64B5F6',
					dark: '#1976D2',
				},

				warning: {
					DEFAULT: '#FF9800',
					light: '#FFB74D',
					dark: '#F57C00',
				},

				pallette: {
					'orange': '#FF5722',
          'orange-red': '#ff4b28',
				},
			},
			keyframes: {
				"accordion-down": {
				  from: { height: '0' },
				  to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
				  from: { height: "var(--radix-accordion-content-height)" },
				  to: { height: '0' },
				},
			  },
			  animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			  },
		},
	},
	plugins: [require("tailwindcss-animate")],
}
export default config
