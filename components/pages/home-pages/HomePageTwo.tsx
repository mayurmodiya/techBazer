
import BannerTwo from '@/components/banners/BannerTwo'
import LatestBlogPosts from '@/components/blog/LatestBlogPosts'
import CategorySectionTwo from '@/components/category/CategorySectionTwo'
import HeroBannerTwo from '@/components/hero/HeroBannerTwo'
import NewsLetterTwo from '@/components/newsLetter/NewsLetterTwo'
import TestimonialsSection from '@/components/others/Testimonials'
import FeaturedDeals from '@/components/products/FeaturedDeals'
import FeaturedProducts from '@/components/products/FeaturedProducts'
import React from 'react'

const HomePageTwo = () => {
  return (
    <div>
      <HeroBannerTwo />
      <FeaturedProducts />
      <TestimonialsSection />
      <CategorySectionTwo />
      <LatestBlogPosts />
      <FeaturedDeals />
      <BannerTwo />
      <NewsLetterTwo />
    </div>
  )
}

export default HomePageTwo