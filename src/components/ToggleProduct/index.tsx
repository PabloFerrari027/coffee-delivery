import useProducts from "@/hooks/useProducts";
import { HTMLAttributes, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import DB from "../../../fake-database.json";

interface IToggleProductParams extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

export default function ToggleProduct({
  id,
  className,
  ...rest
}: IToggleProductParams) {
  const { products, setProducts } = useProducts();
  const [amount, setAmount] = useState(1);

  const handleAddProduct = () => {
    const productAlreadyExists = products.find((p) => p.id === id) || null;
    const getProduct = DB.find((p) => p.id === id);

    if (!getProduct) return;

    if (!productAlreadyExists) {
      const amount = 1;
      const total = amount * getProduct.price;

      const product = {
        ...getProduct,
        amount,
        total,
      };

      setProducts([...products, product]);

      return product;
    }

    const index = products.findIndex((p) => p.id === id);
    const amount = products[index].amount + 1;
    const total = amount * getProduct.price;

    const product = {
      ...getProduct,
      ...products[index],
      id,
      price: getProduct.price,
      amount,
      total,
    };

    products[index] = product;

    setProducts([...products]);
    return product;
  };

  const handleRemoveProduct = () => {
    const productAlreadyExists = products.find((p) => p.id === id) || null;
    const getProduct = DB.find((p) => p.id === id);

    if (!getProduct) return;

    if (!productAlreadyExists) return;

    const index = products.findIndex((p) => p.id === id);

    const amount = products[index].amount - 1;

    if (amount <= 0) products.splice(index, 1);
    else {
      const total = amount * getProduct.price;

      const product = {
        ...getProduct,
        amount,
        total,
      };

      products[index] = product;
    }

    setProducts([...products]);
  };

  useEffect(() => {
    const getProduct = products.find((product) => product.id === id);

    getProduct && setAmount(getProduct.amount);
  }, [products, id]);

  return (
    <div
      {...rest}
      className={twMerge(
        "flex flex-1 items-center justify-center rounded-s-md rounded-e-md overflow-hidden",
        className
      )}
    >
      <button
        onClick={handleRemoveProduct}
        className=" bg-zinc-200 text-purple-700 hover:opacity-50 rounded-s-md flex-1 h-full px-3"
      >
        -
      </button>

      <div className=" bg-zinc-200 flex-1 h-full flex items-center justify-center px-0.5">
        <span className="font-maven text-sm">{amount}</span>
      </div>

      <button
        onClick={handleAddProduct}
        className=" bg-zinc-200 text-purple-700 hover:opacity-60 rounded-e-md flex-1 h-full px-3"
      >
        +
      </button>
    </div>
  );
}
