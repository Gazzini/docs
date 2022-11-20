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
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
            // These are all the worthwhile routes from the old site:
            { from: '/projects', to: '/' },
            { from: '/essays', to: '/writing' },
            { from: '/essays/posts/alignment', to: '/writing/alignment' },
            { from: '/essays/posts/authentic', to: '/writing/authentic' },
            { from: '/essays/posts/babel', to: '/writing/babel' },
            { from: '/essays/posts/breakup', to: '/writing/breakup' },
            { from: '/essays/posts/ditches', to: '/writing/ditches' },
            { from: '/essays/posts/drafts', to: '/writing/drafts' },
            { from: '/essays/posts/extra_mile', to: '/writing/extra_mile' },
            { from: '/essays/posts/failure', to: '/writing/failure' },
            { from: '/essays/posts/forcing_functions', to: '/writing/forcing_functions' },
            { from: '/essays/posts/freedom', to: '/writing/freedom' },
            { from: '/essays/posts/honesty', to: '/writing/honesty' },
            { from: '/essays/posts/incentives', to: '/writing/incentives' },
            { from: '/essays/posts/index.md', to: '/writing/index.md' },
            { from: '/essays/posts/interesting_work', to: '/writing/interesting_work' },
            { from: '/essays/posts/money', to: '/writing/money' },
            { from: '/essays/posts/persuasion', to: '/writing/persuasion' },
            { from: '/essays/posts/pics', to: '/writing/pics' },
            { from: '/essays/posts/pp', to: '/writing/pp' },
            { from: '/essays/posts/progressive', to: '/writing/progressive' },
            { from: '/essays/posts/quit', to: '/writing/quit' },
            { from: '/essays/posts/startup_lessons', to: '/writing/startup_lessons' },
            { from: '/essays/posts/stress', to: '/writing/stress' },
            { from: '/essays/posts/told_you_so', to: '/writing/told_you_so' },
            { from: '/essays/posts/tools', to: '/writing/tools' },
            { from: '/essays/posts/willfulness', to: '/writing/willfulness' },
            { from: '/essays/posts/wisdom', to: '/writing/wisdom' },
          ]
        },
      ],
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
