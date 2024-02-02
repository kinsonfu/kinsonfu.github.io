import type { MarkdownOptions } from 'vitepress';


export const markdown: MarkdownOptions = {
  // Shiki主题, 所有主题参见: https://github.com/shikijs/shiki/blob/main/docs/themes.md
  theme: {
    light: 'github-light',
    dark: 'github-dark-dimmed'
  },
  lineNumbers: true, // 启用行号

  config: (md) => {

    // 在所有文档的<h1>标签后添加<ArticleMetadata/>组件
    md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
      let htmlResult = slf.renderToken(tokens, idx, options);
      if (tokens[idx].tag === 'h1') {
        // console.log('tokens ' + idx + ' ', tokens[idx]);
        htmlResult += `\n<ClientOnly><ArticleMetadata :article="$frontmatter" /></ClientOnly>`;
      }
      return htmlResult;
    }
  },
};
