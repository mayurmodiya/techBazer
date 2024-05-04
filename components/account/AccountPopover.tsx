"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Heart, HelpCircle, ListOrdered, LogOut, User } from "lucide-react";
import Link from "next/link";
import Wishlist from "../carts/Wishlist";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import UserAvatar from "./UserAvatar";

const AccountPopover = () => {
  return (
   <div className="hidden md:block">
     <Popover>
      <PopoverTrigger>
        <User size={25} className="hover:opacity-60 duration-200" />
      </PopoverTrigger>
      <PopoverContent>
        <ul className="space-y-4 text-center ">
          <UserAvatar />
          <Separator />
          <Link
            href={"/my-account"}
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
            href={"/my-orders"}
            className="flex items-center gap-2 hover:opacity-50"
          >
            <ListOrdered size={25} />
            My Orders
          </Link>
          <Link href={"/help"} className="flex items-center gap-2 hover:opacity-50">
            <HelpCircle size={25} />
            Help
          </Link>
          <Separator />
          <div
            className="flex items-start justify-start gap-2 hover:opacity-50"
          >
            <LogOut />
            Logout
          </div>
        </ul>
      </PopoverContent>
    </Popover>
   </div>
  );
};

export default AccountPopover;
