'use client'
import AddToCartBtn from "@/components/buttons/AddToCartBtn";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useWishlistStore from "@/store/wishlistStore";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const WishlistPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { wishlistItems, removeFromWishlist } = useWishlistStore();


  useEffect(() => {
    setIsMounted(true)
  },[])


  if(!isMounted){
    return null
  }

  return (
    <div className="px-4 py-8 lg:px-16 lg:py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white ">
            Wishlist
          </h1>
          <p className="text-gray-600 dark:text-gray-300">Your Saved Items Here</p>
        </div>
        <Separator className="bg-gray-500 my-2" />
        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlistItems.map((cart) => (
            <div key={cart.id} className="">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Link href={`shop/${cart.id}`} className="text-xl font-semibold text-gray-800 dark:text-white hover:opacity-60">
                    {cart.name.slice(0, 50)}
                  </Link>
                  <Button
                    variant="outline"
                    className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 focus:outline-none"
                    onClick={() => removeFromWishlist(cart.id)}
                  >
                    <X />
                  </Button>
                </div>
                <div className="relative w-full h-48">
                  <Image
                    src={cart?.images && cart?.images[0] as string}
                    alt="Product"
                    fill
                    className="w-full h-48 object-contain mb-4"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
                  tincidunt justo. Duis in leo justo. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae metus
                  augue.
                </p>
                <div className="flex justify-between items-center gap-4">
                  <p className="px-3 py-1 rounded-md border border-green-400 text-green-500 whitespace-nowrap">
                    Price: ${cart.price}
                  </p>
                  <AddToCartBtn product={{...cart,quantity:1,selectedColor:''}}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
