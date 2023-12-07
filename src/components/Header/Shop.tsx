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

          {products.length > 0 && (
            <span className="absolute top-0 right-0 translate-x-[25%] translate-y-[-25%] w-[2em] h-[2em] flex justify-center items-center rounded-full bg-brown-500 text-white text-xs font-bold">
              {count > 9 ? "+9" : count}
            </span>
          )}
        </Button>
      </a>
    </div>
  );
}
