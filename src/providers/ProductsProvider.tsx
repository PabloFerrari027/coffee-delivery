import { ProductsContext } from "@/contexts/ProductsContext";
import { findProductById } from "@/utils/findProductById";
import { ReactNode, useMemo, useState } from "react";

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

  async function handleProducts(data: IProductInLocalStorage[]) {
    const products: IProduct[] = [];

    const handle = async (product: IProductInLocalStorage) => {
      const getProduct = await findProductById({ id: product.id });

      if (getProduct) {
        const total = getProduct.price * product.amount;

        products.push({
          ...product,
          ...getProduct,
          total,
        });
      }
    };

    const promises = data.map(handle);

    Promise.all(promises);

    return products;
  }

  useMemo(() => {
    const productsInLocalStorage = getProductsInLocalStorage();

    handleProducts(productsInLocalStorage).then((products) => {
      setProducts([...products]);
    });
  }, [setProducts]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
