import { useEffect, useState } from "react";
import Ilustration from "./components/Ilustration";
import Infos from "./components/Infos";
import { findRequestByUserId } from "@/utils/findRequestByUserId";
import Loading from "../../components/Loading";

interface IRequest {
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

export default function OrderConfirmed() {
  const [request, setRequest] = useState<IRequest | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    findRequestByUserId({ id: "1" })
      .then((req) => {
        setRequest(req);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (isLoading) return <Loading />;

  if (request) {
    return (
      <main className="flex-1 flex max-lg:gap-20 gap-10 max-lg:flex-col-reverse max-md:px-10 px-20 my-10">
        <Infos {...request} />
        <Ilustration />
      </main>
    );
  }

  return (
    <main className="flex-1 flex min-h-[calc(100vh-4.5em)] justify-center items-center max-md:px-10 px-20">
      <h1 className="font-maven max-lg:text-1xl text-2xl font-bold text-slate-700 max-w-xs text-center">
        Você não possui nenhuma entrega em andamento!
      </h1>
    </main>
  );
}
