/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Front-end Advanced Route',
  tagline: '自学前端进阶路线',
  url: 'https://www.itdongdong.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'coderstudyroom', // Usually your GitHub org/user name.
  projectName: 'Front-end-Advanced-Route', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'Front-end Advanced Route',
      logo: {
        alt: 'Front-end Advanced Route Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'right',
        },
        {to: 'blog', label: '博客', position: 'right'},
        {
          href: 'https://github.com/coder-study-room/Front-end-Advanced-Route',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Getting Started',
      //         to: 'docs/',
      //       },
      //     ],
      //   },
      //   {
      //     title: '社区',
      //     items: [
      //       {
      //         label: '掘金',
      //         href: 'https://juejin.cn/user/149189280672616',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: '程序员自习室',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: '更多',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} 程序员自习室 <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备17131802号</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
