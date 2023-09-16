const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NFT Horizon Docs',
  tagline: 'Discover, Collect, Flourish',
  favicon: 'img/favicon.ico',

  
  url: 'https://nfthorizon.netlify.app/',
  baseUrl: '/',

  organizationName: 'ShantanuD1512', // GitHub user name.
  projectName: 'NFTHorizon_Docs', //  repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/ShantanuD1512',
        },
        blog: {
          showReadingTime: true,

          editUrl:
            'https://github.com/ShantanuD1512',
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
      
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'NFT Horizon Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ShantanuD1512',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/gxWETas2',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Shantanu15102?t=Oz0RFOkAWtyWiH0ahyVs8g&s=08',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ShantanuD1512',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NFT Horizon`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
