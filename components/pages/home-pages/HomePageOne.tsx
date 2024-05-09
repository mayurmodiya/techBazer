import React from "react";
import HeroBannerOne from "@/components/hero/HeroBannerOne";
import ProductsCollectionOne from "@/components/products/ProductsCollectionOne";
import NewsLetterTwo from "@/components/newsLetter/NewsLetterTwo";
import LatestBlogPosts from "@/components/blog/LatestBlogPosts";
import CategoriesCollection from "@/components/category/CategoriesCollection";
import TestimonialsSection from "@/components/others/Testimonials";
import BannerOne from "@/components/banners/BannerOne";
import BenefitsSection from "@/components/others/BenefitSection";

const HomePageOne = () => {
  return (
    <section className="overflow-hidden">
      <HeroBannerOne />
      <CategoriesCollection />
      <ProductsCollectionOne />
      <BenefitsSection textCenter={false}/>
      <BannerOne />
      <TestimonialsSection textCenter={false} />
      <LatestBlogPosts twoColunmHeader={true} />
      <NewsLetterTwo />
    </section>
  );
};

export default HomePageOne;
