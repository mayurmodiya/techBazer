'use client'
import BreadcrumbComponent from '@/components/others/Breadcrumb';
import { productsData } from '@/data/products/productsData';
import { Product } from '@/types';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SearchComponent = () => {
    const params = useSearchParams();
    const query = params.get('query') || ''; 
  
    const [foundProducts, setFoundProducts] = useState<Product[]>([]);


    useEffect(() => {
      if (query.trim() === "") {
        setFoundProducts([]);
      } else {
        const searchTerm = query.trim().toLowerCase();
        const filteredProducts = productsData.filter((product) => {
          const productName = product.name.toLowerCase();
          // Check if the product name starts with the search term
          return productName.startsWith(searchTerm + " ") || productName.includes(" " + searchTerm + " ");
        });
        setFoundProducts(filteredProducts);
      }
    }, [query]);
    
    
    
    
  
    console.log('outside effect', foundProducts)
  
    if(foundProducts.length === 0){
      return <div>
        Empty
      </div>
    }
  
    return (
      <div className="max-w-screen-2xl mx-auto p-4 md:p-8 space-y-2">
        <BreadcrumbComponent links={["/shop"]} pageText={query!} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundProducts.map((product) => (
              <div key={product.id}>
                <Image src={product.images[0]} alt="image" height={200} width={200}/>
                <p>{product.name}</p>
              </div>
            ))}
          </div>
      </div>
    );
}

export default SearchComponent