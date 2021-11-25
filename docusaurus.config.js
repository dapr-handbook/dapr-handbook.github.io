/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dapr 指南',
  tagline: 'Dapr 是一个可移植的、事件驱动的运行时，它使任何开发人员能够轻松构建出弹性的、无状态和有状态的应用程序，并可运行在云平台或边缘计算中，它同时也支持多种编程语言和开发框架。',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/daprhandbook.png',
  organizationName: 'dapr-handbook', // Usually your GitHub org/user name.
  projectName: 'dapr-handbook.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Dapr 指南',
      logo: {
        alt: 'My Site Logo',
        src: 'img/daprhandbook.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'new/overview',
          position: 'right',
          label: '入门',
        },
        {
          type: 'doc',
          docId: 'dev/state',
          position: 'right',
          label: '进阶',
        },
        {to: '/blog', label: '文摘', position: 'right'},
        {
          href: 'http://gitlab-hz.lonsid.cn/Team-Works/Techs-Preview/Dapr-Handbook',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'http://gitlab-hz.lonsid.cn/Team-Works/Techs-Preview/Dapr-Handbook',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dream2zz, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'http://gitlab-hz.lonsid.cn/Team-Works/Techs-Preview/Dapr-Handbook/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'http://gitlab-hz.lonsid.cn/Team-Works/Techs-Preview/Dapr-Handbook/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
