import { FaMapMarkerAlt } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { PiCurrencyDollar } from "react-icons/pi";

interface IInfos {
  id: string;
  userId: string;
  cep: string;
  two: string;
  twoNumber: number;
  note: string;
  neighborhood: string;
  city: string;
  UF: string;
  timer: string;
  paymentMethod: string;
}

export default function Infos(data: IInfos) {
  return (
    <section>
      <h1 className="font-bold max-xl:text-4xl text-5xl font-maven text-brown-500">
        Uhu! Pedido confirmado
      </h1>

      <p className="mt-2 text-lg text-slate-600">
        Agora é só aguardar que logo o café chegará até você
      </p>

      <div className="bg-gradient-to-r from-brown-300 to-purple-600 p-0.5 mt-10 rounded-tr-3xl rounded-bl-3xl">
        <ul className="flex-1 bg-white rounded-tr-3xl rounded-bl-3xl p-10 grid gap-10">
          <li className="flex gap-2 items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-purple-700 text-white rounded-full">
              <FaMapMarkerAlt />
            </div>

            <div className="grid text-base text-slate-700">
              <span>
                Entrega em{" "}
                <span className="font-bold">
                  {data?.two}, {data?.twoNumber}
                </span>
              </span>

              <span>
                {data?.neighborhood} - {data?.city}, {data?.UF}
              </span>
            </div>
          </li>

          <li className="flex gap-2 items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-brown-300 text-white rounded-full">
              <MdTimer />
            </div>

            <div className="grid text-base text-slate-700">
              <span>Previsão de entrega</span>

              <span className="font-bold">20 min - 30 min</span>
            </div>
          </li>

          <li className="flex gap-2 items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-brown-500 text-white rounded-full">
              <PiCurrencyDollar />
            </div>

            <div className="grid text-base text-slate-700">
              <span>Pagamento na entrega</span>

              <span className="font-bold">
                {data?.paymentMethod === "card" && "Cartão"}
                {data?.paymentMethod === "pix" && "Pix"}
                {data?.paymentMethod === "money" && "Dinheiro"}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
