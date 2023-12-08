import ToggleProduct from "@/components/ToggleProduct";
import { Separator } from "@/components/ui/separator";
import RemoveProduct from "@/components/RemoveProduct";
import useProducts from "@/hooks/useProducts";

export default function SelectedProducts() {
  const { products } = useProducts();

  return (
    <div className="flex-1 grid gap-5">
      {products.map((product) => (
        <div className="flex-1 flex flex-col gap-3" key={product.id}>
          <div className="flex-1 max-sm:grid flex max-sm:justify-center justify-between max-sm:gap-2 gap-5">
            <div className="flex justify-center max-sm:mx-auto min-w-[4em] max-w-[5em]">
              <img
                className="w-full max-w-[8em] "
                src={product.imgURL}
                alt={`Imagem do produto${product.title}`}
              />
            </div>

            <div className="max-sm:grid flex flex-col justify-center max-sm:gap-0 gap-2">
              <span className="text-slate-600 text-base max-sm:text-center">
                {product.title}
              </span>

              <div className="flex flex-col-reverse gap-2 h-min">
                <div className="flex-1 flex max-sm:justify-center gap-1">
                  <ToggleProduct id={product.id} className="max-w-[6em]" />

                  <RemoveProduct id={product.id} />
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
  );
}
