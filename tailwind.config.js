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
		backgroundColor: [
			"responsive",
			"dark",
			"dark-hover",
			"hover",
			"dark-focus",
			"focus",
		],
		borderWidth: [
			"responsive",
			"dark",
			"dark-focus",
			"focus",
			"dark-hover",
			"hover",
		],
		textColor: [
			"responsive",
			"dark",
			"dark-hover",
			"hover",
			"dark-focus",
			"focus",
		],
	},
	plugins: [require("tailwindcss-dark-mode")()],
}
