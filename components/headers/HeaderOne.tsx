import React from "react";
import Logo from "../logo/Logo";
import Link from "next/link";
import SearchBox from "./SearchBox";
import Cart from "../carts/Cart";
import { ThemeToggle } from "../theme/ThemeToggle";
import AccountPopover from "../account/AccountPopover";
import { Menu } from "lucide-react";
import MobileHeader from "./MobileHeader";
import { Separator } from "../ui/separator";

const HeaderOne = () => {
  return (
    <header className="sticky bg-white dark:bg-slate-950 top-0 z-50 w-full">
      <div className="max-w-screen-2xl mx-auto  p-4 md:py-4 md:px-8 flex items-center justify-between">
        <Logo />
        <ul className="hidden md:flex items-center gap-8 text-lg ">
          <Link className=" hover:underline px-2 py-1 rounded-full" href={"/"}>
            Home
          </Link>
          <Link
            className="hover:underline px-2 py-1 rounded-full"
            href={"/shop"}
          >
            Shop
          </Link>
          <Link
            className="hover:underline px-2 py-1 rounded-full"
            href={"/blog"}
          >
            Blog
          </Link>
          <Link
            className="hover:underline px-2 py-1 rounded-full"
            href={"/contact"}
          >
            Contact
          </Link>
        </ul>
        <div className="flex items-center gap-6 flex-1 md:flex-initial">
          <SearchBox />
          <div className="flex items-center gap-6">
            <div className="hidden md:block">
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
