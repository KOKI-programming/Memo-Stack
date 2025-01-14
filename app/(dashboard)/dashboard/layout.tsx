"use client";

import DashboardNav from "@/components/dashboard-nav";
import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import { dashboardConfig } from "@/config/dashboard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogoutClick = async () => {
        setIsLoading(true);

        try {
            await signOut({ callbackUrl: "/login" });
        } catch (error) {
            console.error("Logout failed", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex items-center justify-between py-4 h-16">
                    <MainNav items={dashboardConfig.mainNav} />
                    <nav>
                        <button
                            onClick={handleLogoutClick}
                            className={cn(
                                buttonVariants({ size: "sm", variant: "secondary" }),
                                "px-4 flex items-center justify-center transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
                            )}
                            disabled={isLoading} // ロード中はボタンを無効化
                        >
                            {isLoading ? (
                                <Icon.spinner className="animate-spin mr-2 h-4 w-4" />
                            ) : null}
                            {isLoading ? "ログアウト中..." : "ログアウト"}
                        </button>
                    </nav>
                </div>
            </header>
            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                <aside className="hidden md:flex w-[200px] flex-col">
                    <DashboardNav items={dashboardConfig.sidebarNav} />
                </aside>
                <main className="flex flex-col w-full flex-1 overflow-hidden">
                    {children}
                </main>
            </div>
            <SiteFooter />
        </div>
    );
}