"use client";

import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Icon } from "@/components/icon";
import Button2 from "@/components/ui/Button square";

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
      await new Promise((resolve) => setTimeout(resolve, 500)); // 0.5秒の遅延
      // Redirect to login page (simulate successful login)
      window.location.href = "/login";
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0  z-40  border-b bg-background">
        <div  className="container h-16 py-4 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <button>
              <Button2
              onClick={handleLoginClick}
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
                "px-4 flex items-center justify-center transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
              )}
              disabled={isLoading} // ロード中はボタンを無効化
            >
              {isLoading ? (
                <Icon.spinner className="animate-spin mr-2 h-4 w-4" />
              ) : null}
              {isLoading ? "ログイン中..." : "ログイン"}
            </Button2>
            </button>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
