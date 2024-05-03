import { productsData } from "@/data/products/productsData";
import React from "react";
import SingleProduct from "../product/SingleProductCartView";

const ProductsCollectionOne = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
      <div className="mb-4">
        <h2 className="text-2xl md:text-4xl font-semibold flex items-center gap-4">
          What`s Trending Now
        </h2>
        <small className="text-sm font-light">
          Get most in demend prodects here
        </small>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productsData.map((product) => (
          <SingleProduct key={product.id} {...product} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default ProductsCollectionOne;
