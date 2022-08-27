// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'LuPeter',
	tagline: 'Study Notes',
	url: 'https://LuPeter.github.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'LuPeter', // Usually your GitHub org/user name.
	projectName: 'LuPeter.github.io', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'zh-tw',
		locales: ['zh-tw', 'en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/LuPeter/LuPeter.github.io/tree/main',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/LuPeter/LuPeter.github.io/tree/main',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Lu Peter Study Notes',
				logo: {
					alt: 'Logo',
					src: 'img/logo.png',
				},
				items: [
					// {
					// 	type: 'doc',
					// 	docId: 'intro',
					// 	position: 'left',
					// 	label: 'Study',
					// },
					{ to: '/docs/category/tech-study', label: 'Study', position: 'left' },
					// {
					// 	href: 'https://github.com/LuPeter/LuPeter.github.io',
					// 	label: 'GitHub',
					// 	position: 'right',
					// },
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Community',
						items: [
							{
								label: 'DEX Study Group',
								href: 'https://noobtechnote.github.io/docs/sg',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()}. LuPeter.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
}

module.exports = config
