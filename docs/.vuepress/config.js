module.exports = {
    title: "daemon's blog",
    description: '前端开发学习笔记',
    base: "/press-blog/",
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebarDepth: 2,
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端学习',
                items: [
                    {text: 'HTML', link: '/htmlearn/'},
                    {text: 'CSS', link: '/csslearn/'},
                    {text: 'JavaScript', link: '/jslearn/'}
                ]
            },
            { text: 'Flutter', link: '/flutter/' },
            { text: 'GitHub', link: 'https://github.com/zhangshuo00' }
        ],
        sidebar: {
            '/htmlearn/': [
                'Doctype作用',
                'src和href有什么区别'
            ],
            '/csslearn/': [
                '选择器'
            ],
            '/jslearn/': [
                'Iterator和for..of循环',
                '理解js闭包',
                '事件委托',
                '节流与防抖',
                '事件流',
                '全方位解读this',
                '深浅拷贝',
                '理解Promise',
                '面向对象的程序设计'
            ],
            '/flutter/': [
                'Dart 语法（一）',
                'Dart 语法（二）',
                'Dart 语法（三）',
                'Dart 语法（四）',
                'Dart 语法（五）',
                
            ]
        }
    }
}