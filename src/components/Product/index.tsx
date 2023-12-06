import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";
import { HTMLProps } from "react";
import ToggleProduct from "../ToggleProduct";

interface IProductParams extends HTMLProps<HTMLDivElement> {
  id: string;
  tags: Array<string>;
  title: string;
  summary: string;
  price: number;
  imgURL: string;
  imgAlt: string;
}

export default function Product({
  className,
  id,
  tags,
  title,
  summary,
  price,
  imgURL,
  imgAlt,
  ...rest
}: IProductParams) {
  return (
    <div
      className={twMerge(
        "flex-1 mt-[2em] bg-zinc-50 p-8  max-w-[24em] rounded-tr-2xl rounded-bl-2xl",
        className
      )}
      {...rest}
    >
      <div className="flex-1 flex justify-center translate-y-[-4em] mb-[-4em]">
        <img className="w-[60%] max-w-[8em]" src={imgURL} alt={imgAlt} />
      </div>

      <div className="flex flex-wrap gap-1 justify-center mt-2">
        {tags.map((tag) => (
          <span className="text-brown-500 bg-brown-200 rounded-full py-1 px-4 uppercase font-bold text-[0.7em]">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-4 text-center font-bold font-maven text-lg text-gray-800">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-500 text-center leading-4">
        {summary}
      </p>

      <div className="flex flex-wrap gap-1 mt-6">
        <p className="flex-1 font-maven text-slate-700 text-center whitespace-nowrap">
          <span className="font-medium text-sm">R$</span>{" "}
          <span className="font-extrabold text-2xl">
            {new Intl.NumberFormat("pt-BR", {
              minimumFractionDigits: 2,
            }).format(price)}
          </span>
        </p>

        <div className="flex-1 flex gap-2">
          <ToggleProduct id={id} price={price} className="max-w-[6em]" />

          <a href="/checkout">
            <Button className="bg-purple-900 hover:bg-purple-900 hover:opacity-90 shadow-none text-white text-base">
              <FaShoppingCart />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
