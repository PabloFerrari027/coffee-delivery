import useProducts from "@/hooks/useProducts";
import { Button } from "../ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { findProductById } from "@/utils/findProductById";
import { useNavigate } from "react-router-dom";

interface IButtonShop {
  id: string;
}

export default function ButtonShop({ id }: IButtonShop) {
  const { products, setProducts } = useProducts();

  const navegate = useNavigate();

  const handleAddProduct = async () => {
    const productAlreadyExists = products.find((p) => p.id === id) || null;
    const getProduct = await findProductById({ id });

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

      navegate("/checkout");
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
    navegate("/checkout");
    return product;
  };

  return (
    <Button
      className="bg-purple-900 hover:bg-purple-900 hover:opacity-90 shadow-none text-white text-base"
      onClick={handleAddProduct}
    >
      <FaShoppingCart />
    </Button>
  );
}
