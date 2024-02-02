import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    Components({
      // 自动注册的组件路径
      dirs: ['../.vitepress/theme/components'],
      // 配合dirs的文件后缀
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // 自当引入arco-design/web-vue组件
      resolvers: [ArcoResolver({ sideEffect: true, resolveIcons: true })], 
    }),
  ],
  ssr: { noExternal: ['@arco-design/web-vue'] },
});
