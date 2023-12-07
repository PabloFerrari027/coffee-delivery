import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "../ui/button";
import useProducts from "@/hooks/useProducts";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IRemoveProduct extends HTMLAttributes<HTMLButtonElement> {
  id: string;
}

export default function RemoveProduct({
  id,
  className,
  ...rest
}: IRemoveProduct) {
  const { products, setProducts } = useProducts();

  const handleRemoveProduct = () => {
    const productAlreadyExists = products.find((p) => p.id === id) || null;

    if (!productAlreadyExists) return;

    const index = products.findIndex((p) => p.id === id);

    products.splice(index, 1);

    setProducts([...products]);
  };

  return (
    <Button
      onClick={handleRemoveProduct}
      type="button"
      className={twMerge(
        "py-[0px] text-xs bg-zinc-200 shadow-none flex gap-2 hover:bg-zinc-200 hover:opacity-80 text-slate-800 font-light uppercase",
        className
      )}
      {...rest}
    >
      <RiDeleteBin6Line className="text-purple-800" />

      <span>Remover</span>
    </Button>
  );
}
