import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import Link from "next/link";

interface MobileNavProps {
    items: NavItem[];
    setShowMobileMenu: (show: boolean) => void;
}

export default function MobileNav({ items, setShowMobileMenu }: MobileNavProps) {
    useLockBodyScroll();

    return (
        <div className="fixed top-16 inset-0 z-50 p-6 shadow-md md:hidden animate-in slide-in-from-bottom-80">
            <div className="grid gap-6 bg-popover p-4 text-popover-foreground shadow-md">
                <Link href={"/"} className="font-bold" onClick={() => setShowMobileMenu(false)}>
                    {siteConfig.name}
                </Link>
                <nav className="font-medium text-sm flex flex-col border-t border-foreground/100">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="py-4 text-foreground/60 hover:text-foreground/100 "
                            onClick={() => setShowMobileMenu(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}
