import { useState } from "react";

import { PiMoney } from "react-icons/pi";
import { BiDollar } from "react-icons/bi";
import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export default function Payment() {
  const [payment, setPayment] = useState<"pix" | "card" | "money" | null>(null);

  return (
    <div className="flex-1 py-10 px-10 mt-5 bg-zinc-50 max-sm:rounded-none rounded-lg">
      <h2 className="flex gap-3">
        <BiDollar className="text-purple-600 text-2xl" />

        <span className="text-slate-800 text-xl">Pagamento</span>
      </h2>

      <p className="ml-9 mt-2 text-sm text-slate-500 leading-4 font-light">
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </p>

      <div className="flex-1 max-sm:grid flex gap-2 mt-5">
        <Button
          type="button"
          onClick={() => setPayment("card")}
          className={`flex-1 flex gap-2 py-6 bg-zinc-200 shadow-none hover:bg-zinc-200 hover:opacity-80 
        ${
          payment === "card" &&
          "border border-purple-800 bg-purple-100 hover:bg-purple-100"
        }
        `}
        >
          <FaRegCreditCard className="text-purple-800" />

          <span className="text-slate-900 font-light uppercase text-xs">
            Cartão
          </span>
        </Button>

        <Button
          type="button"
          onClick={() => setPayment("pix")}
          className={`flex-1 flex gap-2 py-6 bg-zinc-200 shadow-none hover:bg-zinc-200 hover:opacity-80 
        ${
          payment === "pix" &&
          "border border-purple-800 bg-purple-100 hover:bg-purple-100"
        }
        `}
        >
          <FaPix className="text-purple-800" />

          <span className="text-slate-900 font-light uppercase text-xs">
            Pix
          </span>
        </Button>

        <Button
          type="button"
          onClick={() => setPayment("money")}
          className={`flex-1 flex gap-2 py-6 bg-zinc-200 shadow-none hover:bg-zinc-200 hover:opacity-80 
        ${
          payment === "money" &&
          "border border-purple-800 bg-purple-100 hover:bg-purple-100"
        }
        `}
        >
          <PiMoney className="text-purple-800" />

          <span className="text-slate-900 font-light uppercase text-xs">
            Dinheito
          </span>
        </Button>
      </div>
    </div>
  );
}
