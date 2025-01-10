"use client";

import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/icon";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginClick = async () => {
    setIsLoading(true);

    try {
      // Simulate a login request or redirect
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2秒の遅延
      // Redirect to login page (simulate successful login)
      window.location.href = "/login";
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <header className="container z-40 bg-background">
        <div className="h-20 py-6 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <button
              onClick={handleLoginClick}
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
                "px-4 flex items-center justify-center"
              )}
              disabled={isLoading} // ロード中はボタンを無効化
            >
              {isLoading ? (
                <Icon.spinner className="animate-spin mr-2 h-4 w-4" />
              ) : (
                null
              )}
              {isLoading ? "ログイン中..." : "ログイン"}
            </button>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
