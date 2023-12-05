import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IToggleProductParams extends HTMLAttributes<HTMLDivElement> {}

export default function ToggleProduct({
  className,
  ...rest
}: IToggleProductParams) {
  return (
    <div
      {...rest}
      className={twMerge(
        "flex flex-1 items-center justify-center rounded-s-md rounded-e-md overflow-hidden",
        className
      )}
    >
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
  );
}
