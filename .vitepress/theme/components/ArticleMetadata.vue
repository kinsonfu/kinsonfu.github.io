<template>
  <div class="meta-wrapper">
    <div class="meta-item">
      <span class="meta-icon date">
        <svg
          role="img"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title v-if="true">发布时间</title>
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
          ></path>
          <path
            d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
          ></path>
        </svg>
      </span>
      <time
        class="meta-content"
        :datetime="date.toISOString()"
        :title="dayjs().to(dayjs(date))"
        >{{
          date.toLocaleString("zh", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        }}</time
      >
    </div>
    <div class="meta-item" v-if="showViewCount">
      <span class="meta-icon pv">
        <svg
          role="img"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>阅读数</title>
          <path
            d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3-7.7 16.2-7.7 35.2 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z"
          ></path>
          <path
            d="M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
          ></path>
        </svg>
      </span>
      <!-- <span class="meta-content" v-text="viewCount" :title="viewCount"></span> -->
      <span id="busuanzi_value_page_pv"></span>
    </div>
   
  </div>
</template>

<script setup>

import { reactive, toRefs, onMounted } from "vue";
import { useData } from "vitepress";
import md5 from "blueimp-md5";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from "axios";


dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

// 定义文章属性
const props = defineProps({
  // 组件的属性，使用时外部传入
  article: Object,
});

// 初始化文章元数据信息
const { theme, page, frontmatter } = useData();
// reactive用来定义响应式变量，仅支持对象、数组、Map、Set等集合类型有效
const data = reactive({
  author: props.article?.author ?? "花拾夕",
  authorLink: "/about/me",
  showViewCount: true,
  viewCount: 0,
  date: new Date(props.article?.date ?? "2024/01/01 01:01"),
});
// toRefs函数的作用是将响应式对象中的所有属性转换为单独的响应式数据,对象成为普通对象,并且值是关联的。
const { author, authorLink, showViewCount, viewCount, date } = toRefs(data);

if (data.showViewCount) {
  // 记录并获取文章阅读数（使用文章标题 + 发布时间生成 MD5 值，作为文章的唯一标识）
  onMounted(() => {
    // 调用api接口
    // $api.getArticleViewCount(md5(props.article.title + props.article.date), location.href, function(viewCountData) {
    //   data.viewCount = viewCountData;
    // });
    // 动态引入busuanzi且触发计数
    import('busuanzi.pure.js').then((busuanzi) => {
      // console.log('busuanzi => ', busuanzi);
      busuanzi.fetch();
    })
    // 本地的
    // import('../assets/js/mine.busuanzi.pure.js').then((busuanzi) => {
    //   // console.log('busuanzi => ', busuanzi);
    //   busuanzi.fetch();
    // })
    // console.log(props.article.title, " ======= ", props.article.date);
    // if (props.article.title != "" || props.article.date != "") {
    //   // const curCount = dealCount(1, props.article.title);
    //   data.viewCount = 1;
    // }

    // 使用模板字符串将参数拼接在 URL 上
    // axios
    //   .get(`http://127.0.0.1:3000/api`)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  });
}
</script>

<style scoped>
.meta-wrapper {
  margin-top: 10px;
}

.meta-item {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  max-width: 240px;
  color: var(--vp-c-text-2);
  cursor: default;
  font-size: 14px;
}
.meta-item:not(.tag) {
  margin-right: 1rem;
}
.meta-item.original {
  margin-right: 0.5rem;
  margin-top: -0.5px;
}
.meta-icon,
meta-content {
  display: inline-block;
  margin-right: 0.375rem;
  vertical-align: middle;
}
.meta-icon {
  position: relative;
  bottom: 1.5px;
}
.meta-icon.author {
  bottom: 1.3px;
}
.meta-icon.date {
  bottom: 1.3px;
}
.meta-icon svg {
  fill: var(--vp-c-text-2);
  height: 16px;
  width: 16px;
}
.meta-content a {
  font-weight: 400;
  color: var(--vp-c-text-2);
  text-decoration: none;
}
.meta-content a:hover {
  color: var(--vp-c-brand-1);
}
</style>
