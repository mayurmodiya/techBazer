"use client";
import React, { useState } from "react";
import { Separator } from "../ui/separator";
import ProductTab from "./ProductTab";
import BuyNowBtn from "../buttons/BuyNowBtn";
import AddToCartBtn from "../buttons/AddToCartBtn";
import ProductQuantityChange from "./ProductQuantityChange";
import RatingReview from "../others/RatingReview";
import ProductDescription from "./ProductDescription";
import ProductColorSelection from "./ProductColorSelection";
import { Product } from "@/types";

const ProductDetails = (product: Product) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="space-y-2">
      {/* Category */}
      <small className="bg-lime-500 py-1 px-4 rounded-full w-fit">
        {product?.category}
      </small>
      {/* Product Name */}
      <h2 className="text-2xl md:text-3xl font-bold capitalize">
        {product?.name}
      </h2>
      {/* Rating and Review */}
      <RatingReview
        rating={product?.rating || 0}
        review={product?.reviews || 0}
      />
      {/* Product Description */}
      <ProductDescription description={product?.description as string} />
      {/* product colors */}
      <ProductColorSelection
        color={selectedColor}
        setColor={setSelectedColor}
      />

      <div className="flex items-center gap-6 !my-6">
        <div className="">
          {/* Original Price */}
          <p className="text-muted-foreground line-through">
            ${product?.price}
          </p>
          {/* Discounted Price */}
          <p className="text-3xl font-bold text-green-500">
            ${(product?.price! / product?.discount!) * (product?.discount! - 1)}
          </p>
        </div>
        <ProductQuantityChange quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2">
        {/* Add To Cart Button */}
        <AddToCartBtn
          {...{
            id: product?.id!,
            name: product?.name!,
            image: product?.images[0]!,
            price: product?.price!,
            quantity,
          }}
        />
        {/* Buy Now Button */}
        <BuyNowBtn
          {...{
            id: product?.id!,
            name: product?.name!,
            image: product?.images[0]!,
            price: product?.price!,
            quantity,
          }}
        />
      </div>
      {/* Separator */}
      <Separator className="!mt-4" />
      {/* Product Tab */}
      <ProductTab aboutItem={product?.aboutItem!} />
    </div>
  );
};

export default ProductDetails;
