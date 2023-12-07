import { createContext } from "react";

interface IProduct {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  imgURL: string;
  price: number;
  amount: number;
  total: number;
}

interface IContext {
  products: IProduct[];
  setProducts(products: IProduct[]): void;
}

export const ProductsContext = createContext<IContext>({
  products: [],
  setProducts: () => {},
});
