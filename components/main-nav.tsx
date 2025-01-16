"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import { ReactNode, useState } from "react";
import MobileNav from "./mobile-nav";

interface MainNavProps {
    items: NavItem[];
    children?: ReactNode;
}

export default function MainNav({ items }: MainNavProps) {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    return (
        <div className="flex items-center md:gap-10">
            <Link href={"/"} className="hidden md:flex items-center space-x-2">
                <span className="hidden font-black sm:inline-block">
                    Memo Stack
                </span>
            </Link>
            <nav className="md:flex gap-6 hidden">
                {items?.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="text-foreground/60 text-lg sm:text-sm font-medium hover:text-foreground/100"
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>
            <button
                className="md:hidden flex items-center"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                <span className="flex items-center gap-1">
                    {showMobileMenu ? (
                        // 切り替え後のアイコン
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20" height="20" viewBox="0 0 24 24"
                        >
                            <path
                            fill="none"
                            stroke="currentColor"
                            d="M20 20L4 4m16 0L4 20"
                            />
                        </svg>
                    ) : (
                        // デフォルトのアイコン
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                    メニュー
                </span>
            </button>
            {showMobileMenu && <MobileNav items={items} setShowMobileMenu={setShowMobileMenu} />}
        </div>
    );
}
