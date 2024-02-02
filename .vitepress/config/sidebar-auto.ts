// 默认主题
import type { DefaultTheme } from 'vitepress';
// 路径
import path from 'node:path'
// 文件访问
import fs from 'node:fs'
// 文件快速访问
import fg from 'fast-glob';

// 文件根目录，拼接src
const DIR_PATH = path.resolve("./src/");
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = ['index.md', 'README.md', '.vitepress', 'node_modules', '.idea', 'assets']

// 判断是否是文件夹
const isDirectory = (path) => fs.lstatSync(path).isDirectory()

// 取差值
const intersections = (arr1, arr2) => Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))))

// 当分组内文章数量少于 2 篇或文章总数显示超过 20 篇时，自动折叠分组
const groupCollapsedSize = 5;
const titleCollapsedSize = 20;

// 文件递归生成侧边栏数据
function getList(params, path1, pathname) {
    // 存放结果
    let res: DefaultTheme.SidebarItem[] = [];

    // 开始遍历params
    for (let file in params) {
        // 拼接目录
        const dir = path.join(path1, params[file])
        // 判断是否是文件夹
        const isDir = isDirectory(dir)
        if (isDir) {
            // 如果是文件夹,读取之后作为下一次递归参数
            const files = fs.readdirSync(dir)
            const allFiles = fg.sync(`${dir.replace(/\\/g, "/")}/**`, {onlyFiles: true});
            let total = allFiles.filter(a => !a.endsWith('index.md') && !a.endsWith('README.md')).length
            res.push({
                text: params[file].replace('-', ' ') + '(' + total + '篇)',
                collapsed: total < groupCollapsedSize || total > titleCollapsedSize,
                items: getList(files, dir, `${pathname}/${params[file]}`),
            });
        } else {
            // 获取名字
            const name = path.basename(params[file])
            // 排除非 md 文件
            const suffix = path.extname(params[file])
            if (suffix !== '.md' || WHITE_LIST.includes(name)) {
                continue
            }
            res.push({
                text: name.replace('-', ' '),
                link: `${pathname}/${name}`,
            });
        }
    }
    return res
}

export const setSidebar = (pathname) => {
    // 获取pathname的路径
    const dirPath = path.join(DIR_PATH, pathname)
    // 读取pathname下的所有文件或者文件夹
    const files = fs.readdirSync(dirPath)
    // 过滤掉
    const items = intersections(files, WHITE_LIST)
    // getList 函数后面会讲到
    const res = getList(items, dirPath, pathname)
    res.map(r => {
        let text = r.text;
        r.text = text?.substring(text?.indexOf(' ') + 1);
        return r;
    })
    return res
}