const autoprefixer = require('autoprefixer');
const postcss =	require("postcss")
const postcssNested =	require("postcss-nested")
const postcssPresetEnv = require("postcss-preset-env")

const config = {
	plugins: [
		autoprefixer,
		// postcss,
		postcssNested,
		postcssPresetEnv
	]
};

module.exports = config;
