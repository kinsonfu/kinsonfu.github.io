import type { HeadConfig } from 'vitepress';

// 文件头元素配置
export const head: HeadConfig[] = [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '花拾夕' }],
    ['meta', { name: 'keywords', content: '花拾夕的知识库, HSX, WIKI, 博客' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}],
    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:title', content: '花拾夕的知识库' }],
    ['meta', { property: 'og:description', content: '个人技术知识库，分享体系化的技术知识，以及记录一些碎片化的个人心得' }],
    ['meta', { property: 'og:site', content: 'https://blog.xilaike.vip' }],
    ['meta', { property: 'og:site_name', content: '花拾夕的知识库' }],
    ['meta', { property: 'og:image', content: 'https://blog.xilaike.vip/favicon.ico' }],
    // 百度统计https://tongji.baidu.com
    [
        'script', 
        {}, 
        `var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?3779b144facfd19647c3a4ae984f2966";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
        })();`
    ],
    // ['script', { src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }]
    // 引入本地的busuanzi 文件
    // ['script', { src: '/busuanzi.pure.mini.js' }],
    ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
];