import useProducts from "@/hooks/useProducts";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IToggleProductParams extends HTMLAttributes<HTMLDivElement> {
  id: string;
  price: number;
}

export default function ToggleProduct({
  id,
  price,
  className,
  ...rest
}: IToggleProductParams) {
  const { products, setProducts } = useProducts();

  const handleAddProduct = () => {
    const productAlreadyExists = products.find((p) => p.id === id) || null;

    if (!productAlreadyExists) {
      const amount = 1;
      const total = amount * price;

      const product = {
        id,
        price,
        amount,
        total,
      };

      setProducts([...products, product]);

      return product;
    }

    const index = products.findIndex((p) => p.id === id);
    const amount = products[index].amount + 1;
    const total = amount * price;

    const product = {
      id,
      price,
      amount,
      total,
    };

    products[index] = product;

    setProducts(products);
    return product;
  };

  const handleRemoveProduct = () => {
    const productAlreadyExists = products.find((p) => p.id === id) || null;

    if (!productAlreadyExists) return;

    const index = products.findIndex((p) => p.id === id);

    const amount = products[index].amount - 1;

    if (amount <= 0) products.splice(index, 1);
    else {
      const total = amount * price;

      const product = {
        id,
        price,
        amount,
        total,
      };

      products[index] = product;
    }

    setProducts(products);
  };

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
        <span className="font-maven text-sm">1</span>
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
