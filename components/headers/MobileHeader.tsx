"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, HelpCircle, ListOrdered, LogOut, Menu, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme/ThemeToggle";
import UserAvatar from "../account/UserAvatar";
import { Separator } from "../ui/separator";

const MobileHeader = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="" size={25} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <ul className="space-y-4 text-start ">
                <Link href={"/"} className="block">Home</Link>
                <Link href={"/"} className="block">Shop</Link>
                <Link href={"/"} className="block">Blog</Link>
                <Separator />
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <p>Change Theme</p>
                </div>
                <Separator />
                <Link
                  href={"/account"}
                  className="flex items-center gap-2 hover:opacity-50"
                >
                  <User size={25} />
                  My Account
                </Link>
                <Link
                  href={"/wishlist"}
                  className="flex items-center gap-2 hover:opacity-50"
                >
                  <Heart size={25} />
                  <p>Wishlist</p>
                </Link>
                <Link
                  href={"/orders"}
                  className="flex items-center gap-2 hover:opacity-50"
                >
                  <ListOrdered size={25} />
                  My Orders
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-2 hover:opacity-50"
                >
                  <HelpCircle size={25} />
                  Help
                </Link>
                <Separator />
                <Button
                  className="flex items-start justify-start gap-2 hover:opacity-50"
                  variant={"destructive"}
                >
                  <LogOut />
                  Logout
                </Button>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileHeader;
