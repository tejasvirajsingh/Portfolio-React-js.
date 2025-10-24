"use client";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            {/* Trigger button */}
            <SheetTrigger>
                <CiMenuFries className="text-[32px] text-red-500" />
            </SheetTrigger>

            {/* Drawer */}
            <SheetContent className="flex flex-col w-60 bg-[#021735]  text-white px-6 py-8">
                {/* Logo */}
                <div className="mb-8 text-2xl font-bold">
                    <Link
                        href="/"
                        className="hover:text-red-500 transition-colors"
                    >
                        Tejasvi<span className="text-red-500">.</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-6 items-center justify-baseline">
                    {links.map((link, i) => (
                        <SheetClose asChild key={i}>
                            <Link
                                href={link.path}
                                className={`capitalize text-lg transition-colors ${
                                    pathname === link.path
                                        ? "text-red-500 font-semibold"
                                        : "text-gray-400 hover:text-red-400"
                                }`}
                            >
                                {link.name}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
