import { ProductsContext } from "@/contexts/ProductsContext";
import { useContext } from "react";

export default function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}
