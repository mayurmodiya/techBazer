"use client";
import React from "react";
import Logo from "../logo/Logo";
import Link from "next/link";
import SearchBox from "./SearchBox";
import Cart from "../carts/Cart";
import { ThemeToggle } from "../theme/ThemeToggle";
import AccountPopover from "../account/AccountPopover";
import { Menu, Search } from "lucide-react";
import MobileHeader from "./MobileHeader";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMobileSearchModal } from "@/store/mobileSearchStore";

const HeaderOne = () => {
  const pathname = usePathname();

  const links = [
    {
      label: "Home",
      link: "/",
      isActive: pathname === "/",
    },
    {
      label: "Shop",
      link: "/shop",
      isActive: pathname.startsWith("/shop"),
    },
    {
      label: "blogs",
      link: "/blog",
      isActive: pathname.startsWith("/blog"),
    },
  ];


  const {openModal} = useMobileSearchModal()

  return (
    <header className="sticky bg-white dark:bg-slate-950 top-0 z-50 w-full">
      <div className="max-w-screen-2xl mx-auto  p-4 md:py-4 md:px-8 flex items-center justify-between">
        <Logo />
        <ul className="hidden lg:flex items-center gap-8 text-lg ">
          {links.map((link) => (
            <Link
              key={link.link}
              className={cn(
                "font-medium px-4 py-1 rounded-full hover:opacity-70",
                link.isActive && "bg-gray-200 dark:bg-gray-600  rounded-full"
              )}
              href={link.link}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-6 ">
          {/* mobile search option */}
          <div className="lg:hidden text-center">
            <Search size={25} onClick={openModal}/>
          </div>
          {/* desktop search */}
          <div className="hidden lg:block">
            <SearchBox />
          </div>
          <div className="flex items-center gap-6 lg:-mt-1">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            <AccountPopover />
            <Cart />
            <MobileHeader />
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default HeaderOne;
