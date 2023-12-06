import { ProductsContext } from "@/contexts/ProductsContext";
import { ReactNode, useState } from "react";

interface IProductsProvider {
  children: ReactNode;
}

interface IProduct {
  id: string;
  amount: number;
  price: number;
  total: number;
}

export default function ProductsProvider({ children }: IProductsProvider) {
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
