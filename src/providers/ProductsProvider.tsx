import { ProductsContext } from "@/contexts/ProductsContext";
import useProducts from "@/hooks/useProducts";
import { ReactNode } from "react";

interface IProductsProvider {
  children: ReactNode;
}

export default function ProductsProvider({ children }: IProductsProvider) {
  const { products } = useProducts();

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
