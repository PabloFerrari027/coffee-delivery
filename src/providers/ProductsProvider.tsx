import { ProductsContext } from "@/contexts/ProductsContext";
import { ReactNode, useMemo, useState } from "react";
import DB from "../../fake-database.json";

interface IProductInLocalStorage {
  id: string;
  amount: number;
}
interface IProductsProvider {
  children: ReactNode;
}
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

export default function ProductsProvider({ children }: IProductsProvider) {
  const [products, setProducts] = useState<IProduct[]>([]);

  function getProductsInLocalStorage() {
    const getProducts = localStorage.getItem("coffee-shop-products");

    if (!getProducts) return [];

    const products: IProductInLocalStorage[] = JSON.parse(getProducts);

    return products;
  }

  function handleProducts(data: IProductInLocalStorage[]) {
    const products: IProduct[] = [];

    data.forEach((product) => {
      const getProduct = DB.find((p) => p.id === product.id) || null;

      if (getProduct) {
        const total = getProduct.price * product.amount;

        products.push({
          ...product,
          ...getProduct,
          total,
        });
      }
    });

    return products;
  }

  useMemo(() => {
    const productsInLocalStorage = getProductsInLocalStorage();
    const data = handleProducts(productsInLocalStorage);

    setProducts([...data]);
  }, [setProducts]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
