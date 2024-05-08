import Pagination from "@/components/others/Pagination";
import FilterProducts from "@/components/products/FilterProducts";
import ShopPageContainer from "@/components/products/ShopPageContainer";
import SingleProduct from "@/components/product/SingleProductCartView";
import { productsData } from "@/data/products/productsData";
import React from "react";

interface ShopPageOneProps {
  searchParams: {
    page: string;
    category: string;
    brand: string;
    search: string;
    min:string,
    max:string,
    color:string,
  },
}

const ShopPageOne = ({ searchParams }: ShopPageOneProps) => {

  return (
    <section className="max-w-screen-2xl flex gap-2 mx-auto p-2 md:p-8">
        <div className="hidden lg:block w-72">
        <FilterProducts />
        </div>
        <ShopPageContainer gridColumn={3} searchParams={searchParams} />
    </section>
  );
};

export default ShopPageOne;
