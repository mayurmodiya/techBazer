import React from 'react'
import SingleProduct from '../product/SingleProductCartView';


interface RelatedProductsProps {
    products: {
        id: number;
        name: string;
        aboutItem: string[];
        price: number;
        rating: number;
        reviews: number;
        category: string;
        discount: number;
        images: string[];
    }[]
}

const RelatedProducts = ({products}:RelatedProductsProps) => {
  return (
    <section className='max-w-screen-2xl mx-auto p-2 md:p-4'>
        <h2 className='text-2xl md:text-3xl font-bold capitalize my-2'>Related Products For You</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {products?.map(product => (
            <SingleProduct key={product.id} {...product}/>
        ))}
        </div>
    </section>
  )
}

export default RelatedProducts