import { ProductsContext } from "@/contexts/ProductsContext";
import { useContext } from "react";

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

export default function useProducts() {
  const { products, setProducts } = useContext(ProductsContext);

  function handleSetProducts(products: IProduct[]) {
    setProducts(products);
    localStorage.setItem("coffee-shop-products", JSON.stringify(products));
  }

  return { products, setProducts: handleSetProducts };
}
