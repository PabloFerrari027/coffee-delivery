import Product from "@/components/Product";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { PiCoffeeFill } from "react-icons/pi";

export default function Home() {
  return (
    <main>
      <section
        className="
            flex-1 flex max-lg:flex-col-reverse flex-row gap-10 justify-between
            bg-clip-border bg-origin-border bg-center bg-no-repeat bg-cover 
            max-md:px-10 px-20 py-14
            "
        style={{ backgroundImage: "url(/Background.svg)" }}
      >
        <div className="flex-1 h-min flex flex-col items-center max-lg:max-w-lg max-w-2xl mx-auto">
          <div className="flex-1 max-lg:text-center">
            <h1 className="font-bold max-xl:text-4xl text-5xl text-gray-800 font-maven">
              Encontre o café perfeito para qualquer hora do dia
            </h1>

            <p className="max-xl:mt-3 mt-5 text-gray-700 max-xl:text-sm text-lg">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div className="flex-1 w-full h-min mt-10">
            <ul className="grid max-[350px]:grid-cols-1 grid-cols-2 max-[350px]:grid-rows-1 grid-rows-2 gap-4">
              <li className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-full bg-brown-500 flex items-center justify-center flex-shrink-0 text-sm text-white">
                  <FaShoppingCart />
                </div>

                <span className="text-sm text-gray-700 leading-4">
                  Compra simples e segura
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-sm text-white">
                  <BsFillBoxSeamFill />
                </div>

                <span className="text-sm text-gray-700 leading-4">
                  Embalagem mantém o café intacto
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-full bg-brown-300 flex items-center justify-center flex-shrink-0 text-sm text-white">
                  <MdTimer />
                </div>

                <span className="text-sm text-gray-700 leading-4">
                  Entrega rápida e rastreada
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-full bg-purple-700 flex items-center justify-center flex-shrink-0 text-sm text-white">
                  <PiCoffeeFill />
                </div>

                <span className="text-sm text-gray-700 leading-4">
                  O café chega fresquinho até você
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex max-lg:justify-center justify-end items-center">
          <img
            className="w-full max-w-xl"
            src="/ilustration-1.svg"
            alt="Ilustração"
          />
        </div>
      </section>

      <section className="flex-1 max-md:px-10 px-20 mt-20 mb-20">
        <h2 className="font-maven max-lg:text-center max-lg:text-2xl text-3xl font-bold">
          Nossos cafés
        </h2>

        <div className="flex-1 grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-10 mt-10 ">
          <Product
            className="mx-auto"
            id={"1"}
            tags={["tradicional"]}
            title="Expresso Tradicional"
            summary="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
            imgURL="/coffee-1.svg"
            imgAlt="Expresso Tradicional"
          />

          <Product
            className="mx-auto"
            id={"2"}
            tags={["tradicional"]}
            title="Expresso Americano"
            summary="Expresso diluído, menos intenso que o tradicional"
            price={9.9}
            imgURL="/coffee-2.svg"
            imgAlt="Expresso Americano"
          />

          <Product
            className="mx-auto"
            id={"3"}
            tags={["tradicional"]}
            title="Expresso Cremoso"
            summary="Café expresso tradicional com espuma cremosa"
            price={9.9}
            imgURL="/coffee-3.svg"
            imgAlt="Expresso Cremoso"
          />

          <Product
            className="mx-auto"
            id={"4"}
            tags={["tradicional", "gelado"]}
            title="Expresso Gelado"
            summary="Bebida preparada com café expresso e cubos de gelo"
            price={9.9}
            imgURL="/coffee-4.svg"
            imgAlt="Expresso Gelado"
          />

          <Product
            className="mx-auto"
            id={"5"}
            tags={["tradicional", "com leite"]}
            title="Café com Leite"
            summary="Meio a meio de expresso tradicional com leite vaporizado"
            price={9.9}
            imgURL="/coffee-5.svg"
            imgAlt="Café com Leite"
          />

          <Product
            className="mx-auto"
            id={"6"}
            tags={["tradicional", "com leite"]}
            title="Latte"
            summary="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            price={9.9}
            imgURL="/coffee-6.svg"
            imgAlt="Latte"
          />

          <Product
            className="mx-auto"
            id={"7"}
            tags={["tradicional", "com leite"]}
            title="Capuccino"
            summary="Bebida com canela feita de doses iguais de café, leite e espuma"
            price={9.9}
            imgURL="/coffee-7.svg"
            imgAlt="Capuccino"
          />

          <Product
            className="mx-auto"
            id={"8"}
            tags={["tradicional", "com leite"]}
            title="Macchiato"
            summary="Café expresso misturado com um pouco de leite quente e espuma"
            price={9.9}
            imgURL="/coffee-8.svg"
            imgAlt="Macchiato"
          />

          <Product
            className="mx-auto"
            id={"9"}
            tags={["tradicional", "com leite"]}
            title="Mocaccino"
            summary="Café expresso com calda de chocolate, pouco leite e espuma"
            price={9.9}
            imgURL="/coffee-9.svg"
            imgAlt="Mocaccino"
          />

          <Product
            className="mx-auto"
            id={"10"}
            tags={["especial", "com leite"]}
            title="Chocolate Quente"
            summary="Bebida feita com chocolate dissolvido no leite quente e café"
            price={9.9}
            imgURL="/coffee-10.svg"
            imgAlt="Chocolate Quente"
          />

          <Product
            className="mx-auto"
            id={"11"}
            tags={["especial", "alcoólico", "gelado"]}
            title="Cubano"
            summary="Drink gelado de café expresso com rum, creme de leite e hortelã"
            price={9.9}
            imgURL="/coffee-11.svg"
            imgAlt="Cubano"
          />

          <Product
            className="mx-auto"
            id={"12"}
            tags={["especial"]}
            title="Havaiano"
            summary="Bebida adocicada preparada com café e leite de coco"
            price={9.9}
            imgURL="/coffee-12.svg"
            imgAlt="Havaiano"
          />

          <Product
            className="mx-auto"
            id={"13"}
            tags={["especial"]}
            title="Árabe"
            summary="Bebida preparada com grãos de café árabe e especiarias"
            price={9.9}
            imgURL="/coffee-13.svg"
            imgAlt="Expresso Tradicional"
          />

          <Product
            className="mx-auto"
            id={"14"}
            tags={["especial", "alcoólico"]}
            title="Irlandês"
            summary="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            price={9.9}
            imgURL="/coffee-14.svg"
            imgAlt="Irlandês"
          />
        </div>
      </section>
    </main>
  );
}
