import { useRef, useState } from "react";
import useProducts from "@/hooks/useProducts";

import { Button } from "@/components/ui/button";
import { UserInfos } from "./components/UserInfos";
import Payment from "./components/Payment";
import SelectedProducts from "./components/SelectedProducts";
import Resume from "./components/Resume";
import Title from "./components/Title";
import { FaCircleNotch } from "react-icons/fa";

export default function Checkout() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [paymentMethod, setPaymentMethod] = useState<
    "pix" | "card" | "money" | null
  >(null);

  const { products } = useProducts();

  const [isLoading, setLoading] = useState(false);

  const [paymentError, setPaymentError] = useState(false);

  if (products.length > 0) {
    return (
      <main className="flex-1 max-lg:grid flex max-lg:gap-10 gap-5 max-sm:px-0 max-md:px-10 px-20 my-10">
        <section className="flex-1">
          <Title title="Complete seu pedido" />

          <UserInfos
            ref={buttonRef}
            paymentMethod={paymentMethod}
            setLoading={setLoading}
            setPaymentError={setPaymentError}
          />

          <Payment
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            paymentError={paymentError}
          />
        </section>

        <section className="flex-1 lg:max-w-md">
          <Title title="Cafés selecionados" />

          <div className="mt-5 px-10 py-10 bg-zinc-50 max-lg:rounded-lg rounded-tr-3xl rounded-bl-3xl">
            <SelectedProducts />

            <Resume />

            <Button
              onClick={() => buttonRef.current?.click()}
              className="uppercase bg-brown-300 hover:bg-brown-300 hover:opacity-80 w-full mt-10"
            >
              {isLoading ? (
                <FaCircleNotch className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Confirmar pedido"
              )}
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-1 flex min-h-[calc(100vh-4.5em)] justify-center items-center max-md:px-10 px-20">
      <h1 className="font-maven max-lg:text-1xl text-2xl font-bold text-slate-700 max-w-xs text-center">
        Você não possui itens em seu carrinho!
      </h1>
    </main>
  );
}
