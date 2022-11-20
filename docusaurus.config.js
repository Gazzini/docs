// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {() => Promise<import('@docusaurus/types').Config>} */
const createConfig = async () => {
  return {
    title: '// gazzini',
    tagline: 'Projects',
    url: 'https://gazzini.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/pfp.jpg',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'gazzini', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    plugins: [
      require.resolve("@cmfcmf/docusaurus-search-local"),
    ],

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            routeBasePath: '/',
            path: './projects/',
            breadcrumbs: true,
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/gazzini/docs/tree/master/',
            exclude: ['./node_modules', './README.md']
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
        colorMode: {
          defaultMode: 'dark',
        },
        navbar: {
          title: '// gazzini',
          hideOnScroll: true,
          // logo: {
          //   alt: 'skull with cowboy hat',
          //   src: 'img/mystic_rodeo_trans_small.png',
          // },
          items: [
            {
              type: 'search',
              position: 'left',
            },
            {
              href: 'https://github.com/gazzini/docs',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  };
};

module.exports = createConfig;
