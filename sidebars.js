module.exports = {
  docs: [
    {
      type: 'category',
      label: '初级前端',
      items: [
        'level1',
        {
          'HTML': [
            'level1-html/tag',
            'level1-html/semantic',
            'level1-html/doctype',
            'level1-html/dom',
          ],
        },
        'level1-css',
        'level1-js',
      ],
    },
    {
      type: 'category',
      label: '中级前端',
      items: [
        'level2',
        'level2-build',
        'level2-algorithm',
        'level2-http',
        'level2-ts',
        'level2-react',
        'level2-vue',
      ],
    },
    {
      type: 'category',
      label: '高级前端',
      items: [
        'level3',
        'level3-charts',
        'level3-node',
        'level3-serverless',
        'level3-flutter',
        'level3-ios',
        'level3-android',
      ],
    },
  ],
};
