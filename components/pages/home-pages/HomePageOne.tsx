import React from "react";
import HeroBannerOne from "@/components/hero/HeroBannerOne";
import ProductsCollectionOne from "@/components/products/ProductsCollectionOne";
import NewsLetterTwo from "@/components/newsLetter/NewsLetterTwo";
import LatestBlogPosts from "@/components/blog/LatestBlogPosts";
import CategoriesCollection from "@/components/category/CategoriesCollection";
import BannerTwo from "@/components/banners/BannerTwo";
import TestimonialsSection from "@/components/others/Testimonials";

const HomePageOne = () => {
  return (
    <section className="overflow-hidden">
      <HeroBannerOne />
      <CategoriesCollection />
      <ProductsCollectionOne />
      <TestimonialsSection textCenter={false}/>
      <BannerTwo />
      <LatestBlogPosts twoColunmHeader={true}/>
      <NewsLetterTwo />
    </section>
  );
};

export default HomePageOne;
