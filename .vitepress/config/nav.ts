import type { DefaultTheme } from 'vitepress';


//导航栏
export const nav: DefaultTheme.Config['nav'] = [
    { 
        text: 'Java', 
        activeMatch: '/courses/java/', 
        items: [
            { text: 'Java基础', link: '/courses/java/1-Java基础/' },
            { text: 'Java进阶', link: '/courses/java/2-Java进阶/' },
            { text: 'Java高级', link: '/courses/java/3-Java高级/' },
        ] 
    },
    // { 
    //     text: 'Python', 
    //     activeMatch: '/courses/python/', 
    //     items: [
    //         { text: 'Python基础', link: '/courses/python/01-Java基础/' }
    //     ] 
    // },
    // { text: '关于我', link: '/' },
  ]