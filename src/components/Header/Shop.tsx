import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Shop() {
  return (
    <div>
      <Button className="bg-brown-200 hover:bg-brown-200 hover:opacity-90 shadow-none text-brown-500  text-base">
        <FaShoppingCart />
      </Button>
    </div>
  );
}
