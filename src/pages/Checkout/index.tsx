import { PiMoney } from "react-icons/pi";
import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiMapPinLineBold } from "react-icons/pi";
import { BiDollar } from "react-icons/bi";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { InputMask } from "input-mask-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import ToggleProduct from "@/components/ToggleProduct";
import { Separator } from "@/components/ui/separator";
import RemoveProduct from "@/components/RemoveProduct";
import useProducts from "@/hooks/useProducts";

const formSchema = z.object({
  CEP: z.string(),
  two: z.string(),
  twoNumber: z.string(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  UF: z.string(),
});

export default function Checkout() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      CEP: "",
      two: "",
      twoNumber: "",
      complement: "",
      neighborhood: "",
      city: "",
      UF: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [payment, setPayment] = useState<"pix" | "card" | "money" | null>(null);

  const { products } = useProducts();

  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [deliveryValue, setDeliveryValue] = useState(3.5);

  useEffect(() => {
    products.forEach((p) => setTotalItems((t) => t + p.total));
  }, [products]);

  useEffect(() => {
    setTotal(totalItems + deliveryValue);
  }, [products, deliveryValue, totalItems]);

  return (
    <main className="flex-1 max-lg:grid flex gap-5 max-sm:px-0 max-md:px-10 px-20 mb-10">
      <section className="flex-1">
        <h1 className="font-maven max-lg:text-1xl text-2xl font-bold text-slate-700 mt-10 max-sm:mx-10">
          Complete seu pedido
        </h1>

        <div className="flex-1 py-10 px-10 mt-5 bg-zinc-50 max-sm:rounded-none rounded-lg">
          <h2 className="flex gap-3">
            <PiMapPinLineBold className="text-brown-300 text-2xl" />

            <span className="text-slate-800 text-xl">Endereço de Entrega</span>
          </h2>

          <p className="ml-9 mt-2 text-sm text-slate-500 leading-4 font-light">
            Informe o endereço onde deseja receber seu pedido
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-10 flex-1 grid gap-4"
            >
              <FormField
                control={form.control}
                name="CEP"
                render={({ field }) => (
                  <FormItem className="w-full max-sm:max-w-full max-w-[12em]">
                    <FormControl>
                      <InputMask
                        className="w-full bg-transparent border rounded-sm px-2 py-2.5 text-slate-800 placeholder-slate-500 text-sm"
                        value={field.value}
                        onChange={field.onChange}
                        ref={field.ref}
                        placeholder="CEP"
                        masks={[{ index: 5, character: "-" }]}
                        maxLength={9}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="two"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border rounded-sm py-5 px-2 text-slate-800  font-normal text-sm"
                        placeholder="Rua"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex-1 max-sm:grid flex gap-3">
                <FormField
                  control={form.control}
                  name="twoNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="border rounded-sm py-5 px-2 text-slate-800  font-normal text-sm"
                          placeholder="Número"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="complement"
                  render={({ field }) => (
                    <FormItem className="flex-1 relative">
                      <FormControl>
                        <Input
                          className="border rounded-sm py-5 px-2 text-slate-800 font-normal text-sm"
                          placeholder="Complemento"
                          {...field}
                        />
                      </FormControl>

                      {!field.value && (
                        <FormLabel className="text-slate-400 text-xs font-normal italic absolute top-[50%] right-2 translate-y-[-85%]">
                          Opicional
                        </FormLabel>
                      )}
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex-1 max-sm:grid flex gap-3">
                <FormField
                  control={form.control}
                  name="neighborhood"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          className="border rounded-sm py-5 px-2 text-slate-800 font-normal text-sm"
                          placeholder="Bairro"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          className="border rounded-sm py-5 px-2 text-slate-800 font-normal text-sm w-full"
                          {...field}
                          placeholder="Cidade"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="UF"
                  render={({ field }) => (
                    <FormItem className="w-min min-w-[5em] max-sm:w-full">
                      <FormControl>
                        <Input
                          className="border rounded-sm py-5 px-2 text-slate-800 font-normal text-sm"
                          {...field}
                          placeholder="UF"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <button ref={buttonRef} className="hidden" />
            </form>
          </Form>
        </div>

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
      </section>

      <section className="flex-1 mt-10 lg:max-w-md">
        <h1 className="font-maven max-lg:text-1xl text-2xl max-sm:text-center font-bold text-slate-700 max-sm:mx-10">
          Cafés selecionados
        </h1>

        <div className="mt-5 px-10 py-10 bg-zinc-50 max-lg:rounded-lg rounded-tr-3xl rounded-bl-3xl">
          <div className="flex-1 grid gap-5">
            {products.map((product) => (
              <div className="flex-1" key={product.id}>
                <div className="flex-1 max-sm:grid flex max-sm:justify-center justify-between max-sm:gap-2 gap-5">
                  <div className="flex justify-center max-sm:mx-auto min-w-[4em] max-w-[5em]">
                    <img
                      className="w-full max-w-[8em] "
                      src="/coffee-1.svg"
                      alt=""
                    />
                  </div>

                  <div className="max-sm:grid flex flex-col justify-center max-sm:gap-0 gap-2">
                    <span className="text-slate-600 text-base max-sm:text-center">
                      Expresso Tradicional
                    </span>

                    <div className="flex flex-col-reverse gap-2 h-min">
                      <div className="flex-1 flex max-sm:justify-center gap-1">
                        <ToggleProduct
                          id={product.id}
                          price={product.price}
                          className="max-w-[6em]"
                        />

                        <RemoveProduct />
                      </div>

                      <span className="text-slate-900 font-bold text-xs whitespace-nowrap mt-2 text-center max-sm:block hidden">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(product.price)}
                      </span>
                    </div>
                  </div>

                  <div className="max-sm:hidden flex items-center">
                    <span className="text-slate-900 font-bold text-base whitespace-nowrap mt-2 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(product.price)}
                    </span>
                  </div>
                </div>

                <Separator />
              </div>
            ))}
          </div>

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

          <Button
            onClick={() => buttonRef.current?.click()}
            className="uppercase bg-brown-300 hover:bg-brown-300 hover:opacity-80 w-full mt-10"
          >
            Confirmar pedido
          </Button>
        </div>
      </section>
    </main>
  );
}
