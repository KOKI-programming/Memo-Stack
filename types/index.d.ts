import { User } from "@prisma/client"

export type NavItem = {
    title: string;
    href: string;
    disabled?: boolean;
};




export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        github: string;
        x: string;
    };
};

export type DocsConfig = {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
}




export type MarketingConfig = {
    mainNav: NavItem[];
};

export type SidebarNavItem = {
    title: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof icons;
} & (
        | {
            href: string;
            items?: never;
        }
        | {
            href?: string;
            items: NavItem[];
        }
    );

export type DashboardConfig = {
    mainNav: NavItem[];
    sidebarNav: SidebarNavItem[];
};



export type SubscriptionPlan = {
    name: string
    description: string
    stripePriceId: string
}

export type UserSubscriptionPlan = SubscriptionPlan &
    Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
        stripeCurrentPeriodEnd: number
        isPro: boolean
    }
