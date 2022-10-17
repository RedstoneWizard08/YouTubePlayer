// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YouTube Player',
  tagline: 'A clone of the YouTube video player.',
  url: 'https://redstonewizard08.github.io',
  baseUrl: '/YouTubePlayer/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'redstonewizard08',
  projectName: 'YouTubePlayer',
  trailingSlash: true,

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
            'https://github.com/RedstoneWizard08/YouTubePlayer/tree/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },

        sitemap: {
          filename: "sitemap.xml",
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'YouTube Player Docs',
        logo: {
          alt: 'YouTube Player Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial/index',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/demo', label: 'Demo', position: 'left'},
          {
            href: 'https://github.com/RedstoneWizard08/YouTubePlayer',
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
                label: 'Tutorial',
                to: '/docs/tutorial',
              },
              {
                label: 'Installation',
                to: '/docs/install',
              },
              {
                label: 'Contributing',
                to: '/docs/contributing',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/RedstoneWizard08/YouTubePlayer',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Demo',
                to: '/demo',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RedstoneWizard08. Documentation built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
      "docusaurus-plugin-sass",
      [
        "docusaurus-plugin-typedoc",
        {
          entryPoints: ["../lib/index.ts"],
          tsconfig: "../tsconfig.json",

          sidebar: {
            position: 3,
            categoryLabel: "API",
            fullNames: true,
          },
        },
      ],
      [
        "@docusaurus/plugin-pwa",
        {
          debug: true,

          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],

          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/img/docusaurus.png',
            },

            {
              tagName: 'link',
              rel: 'manifest',
              href: '/manifest.json',
            },

            {
              tagName: 'meta',
              name: 'theme-color',
              content: 'rgb(37, 194, 160)',
            },
          ],
        },
      ],
    ],
};

module.exports = config;
