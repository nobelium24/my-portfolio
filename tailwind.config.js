/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#4F46E5',
				secondary: '#10B981',
				tertiary: '#F59E0B',
			}
		},
	},
	variants: {
		extend: {
			scrollbar: ['rounded'],
		},
	},
	plugins: [
		// eslint-disable-next-line no-undef
		import('tailwind-scrollbar-hide'),
		require("tailwindcss-animate")
	],
}

