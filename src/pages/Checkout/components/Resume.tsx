import useProducts from "@/hooks/useProducts";
import { useEffect, useState } from "react";

export default function Resume() {
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [deliveryValue, setDeliveryValue] = useState(0);
  const { products } = useProducts();

  useEffect(() => {
    let totalItemns = 0;

    products.forEach((p) => (totalItemns += p.total));

    setTotalItems(totalItemns);
  }, [products]);

  useEffect(() => {
    setTotal(totalItems + deliveryValue);
  }, [products, deliveryValue, totalItems]);

  useEffect(() => {
    setDeliveryValue(Math.round(Math.random() * 100));
  }, []);
  return (
    <table className="table-auto mt-10 w-full">
      <tbody className="flex-1 grid gap-1">
        <tr className="flex-1 flex justify-between">
          <td className="text-zinc-500 text-sm">Total itens</td>
          <td className="text-zinc-500 text-sm">
            {" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(totalItems)}
          </td>
        </tr>

        <tr className="flex-1 flex justify-between">
          <td className="text-zinc-500 text-sm">Entrega</td>
          <td className="text-zinc-500 text-sm">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(deliveryValue)}
          </td>
        </tr>

        <tr className="flex-1 flex justify-between">
          <td className="text-zinc-800 font-bold text-base">Total</td>
          <td className="text-zinc-800 font-bold text-base">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
