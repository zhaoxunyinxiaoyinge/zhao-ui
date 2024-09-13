module.exports = {
    title: "zhao-ui",
    lang: 'zh-CN',
    description: 'Just playing around.',
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
      },
    themeConfig: {
        logo:"/timger.png",
        lastUpdated: '最后更新时间',
        docsDir: 'docs',
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        lastUpdatedText: 'Updated Date',
        algolia: {
            apiKey: 'your_api_key',
            indexName: 'index_name'
        },


        nav: [{
            text: "指南",
            link: "/guide/installtion",
            activeMatch: "/guide/"
        },
        {
            text: "组件",
            link: "/component/icon",
            activeMatch: "/component/"
        },
        {
            text: "首页",
            link: "/",
        }
    ],

        sidebar:
            {
                "/guide": [{
                    text: "指南",
                    items: [
                        {
                            text: '安装',
                            link: "/guide/installtion"
                        },
                        {
                            text: '快速开始',
                            link: "/guide/getStart"
                        },
                    ]
                },
                ],

                "/component/": [
                    {
                        text: "基础组件",
                        items: [
                            { text: "icon 图标", link: '/component/icon' },
                            { text: "button 按钮", link: '/component/button' },
                            { text: "link 链接", link: '/component/link' },
                            { text: "scrollbar 滚动", link: '/component/scrollbar' },
                            { text: "card 卡片", link: '/component/card' },
                            { text: "space 区域块", link: '/component/space' },
                            {text:"layout布局",link:"/component/layout"},
                            {text:"text组件",link:"/component/text"},
                        ]
                    },
                    {
                        text:"表单组件",
                        items:[
                            {text:'input 组件',link:'/component/input'},
                        ]
                    },
                    {
                        text:"功能组件",
                        items:[  {text:'start 星星评分',link:'/component/start'}]
                    }
                ]
            }

        ,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present 赵训银'
        }
    }
}