import { PiMoney } from "react-icons/pi";
import { BiDollar } from "react-icons/bi";
import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { MdErrorOutline } from "react-icons/md";

interface IPayment {
  paymentMethod: "pix" | "card" | "money" | null;
  paymentError: boolean;
  setPaymentMethod: React.Dispatch<
    React.SetStateAction<"pix" | "card" | "money" | null>
  >;
}

export default function Payment({
  paymentMethod,
  setPaymentMethod,
  paymentError,
}: IPayment) {
  return (
    <div className="flex-1 py-10 px-10 mt-5 bg-zinc-50 max-sm:rounded-none rounded-lg">
      <h2 className="flex gap-3">
        <BiDollar className="text-purple-600 text-2xl" />

        <span className="text-slate-800 text-xl">Pagamento</span>
      </h2>

      <p className="ml-9 mt-2 text-sm text-slate-500 leading-4 font-light">
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </p>

      {paymentError && (
        <p className="ml-9 mt-5 text-sm text-red-500 leading-4 font-light flex items-center gap-1">
          <MdErrorOutline /> Selecione um método de pagamento!
        </p>
      )}

      <div className="flex-1 max-sm:grid flex gap-2 mt-5">
        <Button
          type="button"
          onClick={() => setPaymentMethod("card")}
          className={`flex-1 flex gap-2 py-6 bg-zinc-200 shadow-none hover:bg-zinc-200 hover:opacity-80 
        ${
          paymentMethod === "card" &&
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
          onClick={() => setPaymentMethod("pix")}
          className={`flex-1 flex gap-2 py-6 bg-zinc-200 shadow-none hover:bg-zinc-200 hover:opacity-80 
        ${
          paymentMethod === "pix" &&
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
          onClick={() => setPaymentMethod("money")}
          className={`flex-1 flex gap-2 py-6 bg-zinc-200 shadow-none hover:bg-zinc-200 hover:opacity-80 
        ${
          paymentMethod === "money" &&
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
