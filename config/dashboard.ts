import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
    mainNav: [
        { title:"ドキュメント",
          href: "/docs",
        },
        { title:"ガイド",
          href: "/guides",
          disabled: true,
        },
    ],
    sidebarNav: [
        { title: "記事投稿",
          href: "/dashboard",
          icon: "post",
        },
        { title: "お支払い",
          href: "/dashboard/billing",
          icon: "billing",
        },
        { title: "設定",
            href: "/dashboard/settings",
            icon: "settings",
        },
    ],
 };
