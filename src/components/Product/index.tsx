import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";
import { HTMLProps } from "react";

interface IProductParams extends HTMLProps<HTMLDivElement> {
  tags: Array<string>;
  title: string;
  summary: string;
  price: string;
  imgURL: string;
  imgAlt: string;
}

export default function Product({
  className,
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
          <span className="font-extrabold text-2xl">{price}</span>
        </p>

        <div className="flex-1 flex">
          <div className="flex flex-1 items-center justify-center ml-auto mr-1 h-9 rounded-s-md rounded-e-md overflow-hidden">
            <button className=" bg-zinc-200 text-purple-700 hover:opacity-50 rounded-s-md flex-1 h-full px-3">
              -
            </button>

            <div className=" bg-zinc-200 flex-1 h-full flex items-center justify-center px-0.5">
              <span className="font-maven text-sm">1</span>
            </div>

            <button className=" bg-zinc-200 text-purple-700 hover:opacity-60 rounded-e-md flex-1 h-full px-3">
              +
            </button>
          </div>

          <Button className="bg-purple-900 hover:bg-purple-900 hover:opacity-90 shadow-none text-white text-base">
            <FaShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
}
