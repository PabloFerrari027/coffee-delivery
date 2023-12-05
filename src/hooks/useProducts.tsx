import { useEffect, useState } from "react";

interface IProduct {
  id: string;
  amount: number;
  price: number;
  total: number;
}

function getProducts(): Array<IProduct> {
  const getProducts = localStorage.getItem("coffee-shop-products");

  if (!getProducts) return [];

  const products: Array<IProduct> = JSON.parse(getProducts) || [];

  return products;
}

export default function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleSetProducts = (products: IProduct[]) => {
    localStorage.setItem("coffee-shop-products", JSON.stringify(products));
    setProducts(products);
  };

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return { products, setProducts: handleSetProducts };
}
