module.exports = {
	purge: {
		content: ["./src/**/*.svelte"],
		options: {
			whitelist: ["mode-dark"],
		},
	},
	theme: {
		extend: {},
	},
	variants: {
		backgroundColor: ["responsive", "dark"],
		borderColor: ["responsive", "dark"],
		textColor: ["responsive", "dark"],
	},
	plugins: [require("tailwindcss-dark-mode")()],
}
