
export type Product = {
    id: number;
    name: string;
    category: string;
    description: string;
    aboutItem: string[];
    price: number;
    discount: number;
    rating: number;
    reviews: number;
    brand?:string,
    color?:string,
    images: string[];
  }



export type SearchParams = {
    page: string;
    category: string;
    brand: string;
    search: string;
    min: string;
    max: string;
    color: string;
  };


export interface CartItem {
  id: number; // Assuming product ID is a number
  name: string;
  price: number;
  quantity: number;
  image?: string; // Added image property
  // ... other product properties (if needed)
}


export interface WishlistItem {
  id: number;
  name: string;
  image?: string;
  price:number,
}