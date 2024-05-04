import BannerOne from "@/components/banners/BannerOne";
import BannerTwo from "@/components/banners/BannerTwo";
import LatestBlogPosts from "@/components/blog/LatestBlogPosts";
import CategorySectionOne from "@/components/category/CategorySectionOne";
import HeroBannerTwo from "@/components/hero/HeroBannerTwo";
import NewsLetterTwo from "@/components/newsLetter/NewsLetterTwo";
import TestimonialsSection from "@/components/others/Testimonials";
import ProductsCollectionTwo from "@/components/products/ProductsCollectionTwo";
import React from "react";

const HomePageTwo = () => {
  return (
    <div>
      <HeroBannerTwo />
      <CategorySectionOne />
      <ProductsCollectionTwo />
      <TestimonialsSection textCenter={true} />
      <BannerOne />
      <LatestBlogPosts twoColunmHeader={false} />
      <NewsLetterTwo />
    </div>
  );
};

export default HomePageTwo;
