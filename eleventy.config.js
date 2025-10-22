export default function (eleventyConfig) {
	// Output directory: _site

	eleventyConfig.setTemplateFormats(['html', 'mustache', 'njk', '11ty.js']);

	// Copy 'bin/' to '_site/bin/'
	eleventyConfig.addPassthroughCopy('bin');

	// Copy 'img/' to '_site/img/'
	eleventyConfig.addPassthroughCopy('img');

	// Copy 'js/' to '_site/js/'
	eleventyConfig.addPassthroughCopy('js');

	// Copy icons to '_site/'
	eleventyConfig.addPassthroughCopy('*.ico');

	// Copy css to '_site/'
	eleventyConfig.addPassthroughCopy('*.css');
};
