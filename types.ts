
export type Product = {
    id: number;
    name: string;
    category: string;
    description: string;
    aboutItem: string[];
    price: number;
    discount: number;
    rating: number;
    reviews: Record<any, string>[];
    brand?:string,
    color?:string,
    stockItems:number
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
  id: number; 
  name: string;
  price: number;
  quantity: number;
  image?: string; 
  color:string,
  brand?:string,
}


export interface WishlistItem {
  id: number;
  name: string;
  image?: string;
  price:number,
  color:string,
  brand:string
}