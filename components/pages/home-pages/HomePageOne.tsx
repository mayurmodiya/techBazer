import React from "react";
import HeaderOne from "../../headers/HeaderOne";
import { Separator } from "@/components/ui/separator";
import HeroBannerOne from "@/components/hero/HeroBannerOne";
import CategorySectionOne from "@/components/category/CategorySectionOne";
import ProductsCollectionOne from "@/components/products/ProductsCollectionOne";
import DiscountBannerOne from "@/components/banners/BannerOne";
import ProductsCollectionTwo from "@/components/products/ProductsCollectionTwo";
import NewsLetterTwo from "@/components/newsLetter/NewsLetterTwo";
import LatestBlogPosts from "@/components/blog/LatestBlogPosts";

const HomePageOne = () => {
  return (
    <section className="overflow-hidden">
      <HeroBannerOne />
      <CategorySectionOne />
      <ProductsCollectionOne />
      <DiscountBannerOne />
      <ProductsCollectionTwo />
      <LatestBlogPosts />
      <NewsLetterTwo />
    </section>
  );
};

export default HomePageOne;
