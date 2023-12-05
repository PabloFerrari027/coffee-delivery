import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../ui/button";
import useProducts from "@/hooks/useProducts";
import { useEffect, useState } from "react";

export default function Shop() {
  const { products } = useProducts();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let count = 0;

    products.forEach((p) => (count += p.amount));

    setCount(count);
  }, [products]);

  return (
    <div>
      <a href="/checkout">
        <Button className="bg-brown-200 hover:bg-brown-200 hover:opacity-90 shadow-none text-brown-500 text-base relative">
          <FaShoppingCart />

          <span className="absolute top-0 right-0 translate-x-[25%] translate-y-[-25%] w-[1.5em] h-[1.5em] flex justify-center items-center rounded-full bg-brown-500 text-white text-xs font-bold">
            {count}
          </span>
        </Button>
      </a>
    </div>
  );
}
