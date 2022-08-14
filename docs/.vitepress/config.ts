import Unocss from "unocss/vite";
import { defineConfig } from "vitepress";
import Inspect from "vite-plugin-inspect";

export default defineConfig({
  lang: "zh-CN",
  title: "客怎眠qvq",
  description: "基于 vitepress 的小说网站",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: "logo.svg",
    lastUpdated: true,
    nav: [
      {
        text: "小说",
        link: "/novel/",
      },
      {
        text: "关于",
        link: "/about/",
      },
      {
        text: "Blog",
        link: "https://www.kzmqvq.com",
      },
      {
        text: "GitHub",
        link: "https://github.com/bluehyssopu",
      },
    ],
    sidebar: {
      "/novel/": [
        {
          text: "简介",
          link: "/novel/index",
        },
        {
          text: "第一章",
          link: "/novel/chapter001",
        },
      ],
    },
  },
  vite: {
    plugins: [
      Inspect({
        enabled: false,
      }),
      Unocss({
        mode: "per-module",
      }),
    ],
  },
});
