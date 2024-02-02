// 默认主题
import type { DefaultTheme } from 'vitepress';
// 侧边栏自动生成方法
import { setSidebar } from './sidebar-auto'

// 左侧菜单栏
export const sidebar: DefaultTheme.Config['sidebar'] = {
  // Java模块
  '/courses/java/': setSidebar("/courses/java"),
  // Python模块
  '/courses/python/': setSidebar("/courses/python"),
}