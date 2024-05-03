'use client'
import React from "react";
import { Button } from "../ui/button";
import { WishlistItem } from "@/types";
import useWishlistStore from "@/store/wishlistStore";
import { showToast } from "@/lib/showToast";

const AddToWishlistBtn = (item:WishlistItem) => {
  const {addToWishlist,isInWishlist} = useWishlistStore()

  const handleAddToWishList = () => {
    if(isInWishlist(item.id)){
      showToast('Item Already Exist In Wishlist',item.image as string, item.name)
    }else{
      addToWishlist(item);
    showToast('Item Added To The Wishlist',item.image as string, item.name)
    }
  }

  return (
    <Button onClick={(handleAddToWishList)} variant={"outline"} className="w-full p-8 text-xl rounded-full">
      {" "}
      Add To Wishlish
    </Button>
  );
};

export default AddToWishlistBtn;
