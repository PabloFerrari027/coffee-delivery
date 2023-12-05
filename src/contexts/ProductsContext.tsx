import { createContext } from "react";

interface IProduct {
  id: string;
  amount: number;
  price: number;
  total: number;
}

export const ProductsContext = createContext<IProduct[]>([]);
