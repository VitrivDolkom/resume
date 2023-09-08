/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	darkMode: "media",
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				"ebony-clay": {
					50: "#f5f7fa",
					100: "#ebeff3",
					200: "#d2dbe5",
					300: "#aabccf",
					400: "#7d99b3",
					500: "#5c7c9b",
					600: "#486381",
					700: "#3b5169",
					800: "#344558",
					900: "#2f3c4b",
					950: "#202833",
				},
			},
		},
	},
	plugins: [],
}
