import React, { Ref, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { PiMapPinLineBold } from "react-icons/pi";

import { InputMask } from "input-mask-react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { createRequest } from "@/utils/createRequest";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  two: z.string().min(1),
  twoNumber: z.string().min(1),
  note: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  UF: z.string().min(1),
});

interface IUserInfos {
  setPaymentError(value: boolean): void;
  setLoading(value: boolean): void;
  paymentMethod: "pix" | "card" | "money" | null;
}

export const UserInfos = React.forwardRef(
  (
    { paymentMethod, setLoading, setPaymentError }: IUserInfos,
    ref: Ref<HTMLButtonElement>
  ) => {
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        two: "",
        twoNumber: "",
        note: "",
        neighborhood: "",
        city: "",
        UF: "",
      },
    });

    const cepRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    async function onSubmit(values: z.infer<typeof formSchema>) {
      setLoading(true);

      const cep = cepRef.current?.value || "";

      const twoNumber = Number(values.twoNumber);

      const { UF, city, neighborhood, two, note } = values;

      if (!cep.trim()) {
        cepRef.current?.focus();
        setLoading(false);

        return;
      }

      if (!paymentMethod) {
        setPaymentError(true);
        setLoading(false);

        return;
      } else {
        setPaymentError(false);
      }

      await createRequest({
        UF,
        city,
        neighborhood,
        two,
        note,
        paymentMethod,
        userId: "1",
        cep,
        twoNumber,
      });

      setLoading(false);

      navigate("/order/confirmed");
    }

    return (
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
            <FormItem className="w-full max-sm:max-w-full max-w-[12em]">
              <InputMask
                ref={cepRef}
                className="w-full bg-transparent border rounded-sm px-2 py-2.5 text-sm placeholder:text-slate-500"
                placeholder="CEP"
                masks={[{ index: 5, character: "-" }]}
                maxLength={9}
              />
            </FormItem>

            <FormField
              control={form.control}
              name="two"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className={`border rounded-sm py-5 px-2 font-normal text-sm text-slate-800`}
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
                        className={`border rounded-sm py-5 px-2 font-normal text-sm text-slate-800`}
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
                name="note"
                render={({ field }) => (
                  <FormItem className="flex-1 relative">
                    <FormControl>
                      <Input
                        className={`border rounded-sm py-5 px-2 font-normal text-sm text-slate-800 placeholder:text-slate-500 `}
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
                        className={`border rounded-sm py-5 px-2 font-normal text-sm text-slate-800`}
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
                        className={`border rounded-sm py-5 px-2 font-normal text-sm text-slate-800 w-full`}
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
                        className={`border rounded-sm py-5 px-2 font-normal text-sm text-slate-800`}
                        {...field}
                        placeholder="UF"
                        maxLength={2}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <button ref={ref} className="hidden" />
          </form>
        </Form>
      </div>
    );
  }
);
