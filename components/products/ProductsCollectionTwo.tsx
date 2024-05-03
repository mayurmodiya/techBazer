import { offerProductsData } from "@/data/offer/offerProductsData";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import AddToCartBtn from "../buttons/AddToCartBtn";
import AddToWishlistBtn from "../buttons/AddToWishlistBtn";

const ProductsCollectionTwo = () => {
  return (
    <section className="max-w-screen-2xl mx-auto py-16 px-4 md:px-8">
      <div className="my-4 space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold capitalize">
          Deals of the day
        </h2>
        <p className="text-muted-foreground">
          This is a limited time offer so Grab it quickly
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {offerProductsData.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col md:flex-row items-center md:items-start justify-around xl:justify-between gap-6  border p-4 md:p-8 rounded-lg shadow-md"
          >
            <Image
              src={offer.image as string}
              alt="product"
              width={250}
              height={250}
            />
            <div className="">
              <small className="bg-green-500 py-1 px-4 rounded-full">
                {offer.offerText}
              </small>
              <h3 className="text-2xl font-semibold capitalize">
                {offer.name}
              </h3>
              <div className="my-4">
                <p className="text-muted-foreground line-through">
                  ${offer.price}
                </p>
                <p className="text-3xl text-green-500 font-semibold">
                  ${(offer.price / offer.discount) * (offer.discount - 1)}
                </p>
              </div>
              <div className="mb-2">
                <AddToCartBtn />
              </div>
              <p className="text-rose-500  rounded-full text-sm text-center w-fit my-2">
                {offer.inStock} + pcs are in stock
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button variant={"outline"} className="w-full p-4 rounded-full">
                  View Product
                </Button>
                <AddToWishlistBtn />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsCollectionTwo;
