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
                    Post Writer
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
                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 20 20"
                        >
                            <path
                            fill="currentColor"
                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
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
