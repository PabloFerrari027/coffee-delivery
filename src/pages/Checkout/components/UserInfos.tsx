import React, { Ref } from "react";
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

const formSchema = z.object({
  CEP: z.string(),
  two: z.string(),
  twoNumber: z.string(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  UF: z.string(),
});

export const UserInfos = React.forwardRef((_, ref: Ref<HTMLButtonElement>) => {
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

          <button ref={ref} className="hidden" />
        </form>
      </Form>
    </div>
  );
});
