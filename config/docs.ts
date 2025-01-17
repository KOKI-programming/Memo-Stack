import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "ダッシュボード",
      href: "/dashboard",
    },
    {
      title: "ドキュメント",
      href: "/docs",
    },
    {
      title: "ガイド",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "はじめに",
      items: [
        {
          title: "サービス紹介",
          href: "/docs",
        },
      ],
    },
    {
      title: "利用マニュアル",
      items: [
        {
          title: "概要",
          href: "/docs/documentation",
        },
        {
          title: "スタイルガイド",
          href: "/docs/documentation/style-guide",
        },
      ],
  }
  ],
}