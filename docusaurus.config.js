/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "前端进阶导航(2021版)",
  titleDelimiter: "🦖", // Defaults to `|`
  tagline: "自学前端的进阶线路，系统化学习前端知识，从前端小白到大神！",
  url: "https://coder-study-room.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "coder-study-room", // Usually your GitHub org/user name.
  projectName: "Front-end-Advanced-Route", // Usually your repo name.
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    hideableSidebar: true,
    announcementBar: {
      id: "supportus",
      content:
        '⭐️ If you like, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/coder-study-room/Front-end-Advanced-Route">GitHub</a>! ⭐️',
    },
    // algolia: {
    //   apiKey: '47ecd3b21be71c5822571b9f59e52544',
    //   indexName: 'docusaurus-2',
    //   contextualSearch: true,
    // },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "前端进阶导航(2021版)",
      hideOnScroll: true,
      logo: {
        alt: "Front-end Advanced Route Logo",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          position: "left",
          label: "前端学习",
          items: [
            {
              to: "docs/",
              activeBasePath: "docs",
              label: "前端进阶",
            },
            {
              to: "weekly/",
              activeBasePath: "weekly",
              label: "前端精读",
            }
          ],
        },
        {
          to: "interview/",
          activeBasePath: "interview",
          label: "前端面试",
          position: 'left'
        },
        {
          href: "https://juejin.cn/user/149189280672616/posts",
          label: "掘金",
          position: "right",
        },
        {
          href: "https://www.itdongdong.com",
          label: "博客",
          position: "right",
        },
        // {to: 'blog', label: '博客', position: 'right'},
        {
          href: "https://www.aliyun.com/minisite/goods?userCode=656jmlbm",
          label: "阿里云2折",
          position: "right",
        },
        {
          href: "https://github.com/coder-study-room/Front-end-Advanced-Route",
          position: "right",
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "程序员自习室开源",
        src: "https://docusaurus.io/img/oss_logo.png",
      },
      links: [
        {
          title: "社区",
          items: [
            {
              label: "掘金",
              href: "https://juejin.cn/user/149189280672616",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "程序员自习室",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 程序员自习室 <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备17131802号</a>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/",
        },
        interview: {
          sidebarPath: require.resolve("./sidebarsInterview.js"),
          editUrl:
            "https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/",
        },
        weekly: {
          sidebarPath: require.resolve("./sidebarsWeekly.js"),
          editUrl:
            "https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "interview",
        path: "interview",
        editUrl:
          "https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/",
        editCurrentVersion: true,
        routeBasePath: "interview",
        sidebarPath: require.resolve("./sidebarsInterview.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "weekly",
        path: "weekly",
        editUrl:
          "https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/",
        editCurrentVersion: true,
        routeBasePath: "weekly",
        sidebarPath: require.resolve("./sidebarsWeekly.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ],
};
