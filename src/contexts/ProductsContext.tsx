import { createContext } from "react";

interface IProduct {
  id: string;
  amount: number;
  price: number;
  total: number;
}

interface IContext {
  products: IProduct[];
  setProducts(products: IProduct[]): void;
}

export const ProductsContext = createContext<IContext | null>(null);
