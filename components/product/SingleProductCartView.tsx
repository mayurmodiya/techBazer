"use client";
import React from "react";
import RatingReview from "../others/RatingReview";
import Link from "next/link";
import Image from "next/image";
import ProductOptions from "./ProductOptions";
import { Product } from "@/types";



const SingleProductCartView = (product:Product) => {

  const {
    aboutItem,
    category,
    description,
    discount,
    id,
    images,
    name,
    price,
    rating,
    reviews,
  } = product;


  return (
    <Link
      href={`/shop/${id}`}
      className="relative border rounded-xl shadow-lg overflow-hidden group"
    >
      <div className={`w-full bg-gray-200 overflow-hidden`}>
        <div className="relative w-full h-[18rem] group-hover:scale-110 transition-all duration-300 rounded-md overflow-hidden">
          <Image className="object-contain" src={images[0]} alt={name} fill />
          <p className="py-1 px-4 text-sm font-bold rounded-md bg-rose-500 text-white absolute top-3 right-3">{product.discount}% off</p>
        </div>
      </div>
      <div className="hidden group-hover:block slideCartOptions absolute top-16 right-3">
        <ProductOptions {...product} />
      </div>
      <div className="my-2 space-y-1 p-4">
        <Link href={`shop?category=${category}`} className="text-sm text-sky-500 font-light"> {category}</Link>
        <h3 className="text-xl font-fold capitalize hover:text-green-500">
          {name.slice(0, 45)}
          {name.length > 45 && "..."}
        </h3>
        <RatingReview rating={rating} review={reviews} />
        <div className="text-lg font-bold space-x-3 ">
          <span className="line-through text-muted-foreground">${price}</span>
          <span className="text-xl font-bold text-green-500">
            ${(price / discount) * (discount - 1)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SingleProductCartView;
