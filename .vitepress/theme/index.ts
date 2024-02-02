import { h, nextTick, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vitepress';
import mediumZoom from 'medium-zoom';
import DefaultTheme from 'vitepress/theme';
import axios from 'axios';

import './assets/styles/index.css';

// import ArticleMetadata from './components/ArticleMetadata.vue';

export default {
    // 继承默认主题
    extends: DefaultTheme,
    // 注入布局插槽
    // Layout() {
    //     return h(DefaultTheam.Layout, null, {
    //         'nav-bar-title-before': () => h(Logo)
    //     });
    // },
    enhanceApp(ctx) {
        // extend default theme custom behaviour.
        DefaultTheme.enhanceApp(ctx);

        // 全局挂载 API 接口
        ctx.app.config.globalProperties.$http = axios
    
        // 手动注册自定义全局组件，可通过unplugin-vue-components，见src/vite.config.ts的Components插件
        // ctx.app.component('ArticleMetadata',  ArticleMetadata);
    },
    setup () {
        const route = useRoute();
        const initZoom = () => {
            (mediumZoom as unknown as Function)('.main img', {
                background: 'var(--vp-c-bg)'
            });
            onMounted(() => {
                initZoom();
            });
            watch(
                () => route.path,
                () => nextTick(() => initZoom())
            );
        }
    }
}

