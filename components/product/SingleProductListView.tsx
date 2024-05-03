"use client";
import React from "react";
import RatingReview from "../others/RatingReview";
import Link from "next/link";
import Image from "next/image";
import ProductOptions from "./ProductOptions";
import AddToWishlistBtn from "../buttons/AddToWishlistBtn";
import AddToCartBtn from "../buttons/AddToCartBtn";

interface SingleProductListViewProps {
  id: number;
  name: string;
  aboutItem: string[];
  price: number;
  rating: number;
  reviews: number;
  category: string;
  discount: number;
  images: string[];
}

const SingleProductListView = ({
  aboutItem,
  category,
  discount,
  id,
  images,
  name,
  price,
  rating,
  reviews,
}: SingleProductListViewProps) => {
  return (
    <Link
      href={`/shop/${id}`}
      className="group flex flex-col lg:flex-row lg:items-start items-center justify-center gap-4 relative space-y-4 p-4 md:p-8 border"
    >
      <div className="flex-shrink-0 w-[20rem] h-[18rem] relative rounded-md overflow-hidden bg-gray-200">
        <Image src={images[0]} alt={name} fill className="object-contain" />
      </div>
      <div className="">
        <p className="text-sm text-sky-500 font-light">{category}</p>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold hover:text-green-500">
            {name.slice(0, 45)}
            {name.length > 45 && "..."}
          </h3>
        </div>
        <RatingReview rating={rating} review={reviews} />
        <div className="text-lg font-bold space-x-2 my-4 ">
          <span className="line-through text-muted-foreground">${price}</span>
          <span className="text-xl font-bold text-green-500">
            ${(price / discount) * (discount - 1)}
          </span>
        </div>
        <div className=" text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam
          consequatur, corporis magnam quibusdam quae minima quidem. Quis
          nostrum laboriosam libero culpa expedita a repellendus, officiis,
          saepe, deleniti quia reiciendis.
        </div>
        <div
          className="flex flex-col md:flex-row mt-4 items-center gap-2 w-96 ml-auto justify-end"
          onClick={(e) => e.preventDefault()}
        >
          <AddToWishlistBtn {...{ id, name, price, image: images[0] }} />
          <AddToCartBtn
            {...{ id, name, image: images[0], price, quantity: 0 }}
          />
        </div>
      </div>
    </Link>
  );
};

export default SingleProductListView;
