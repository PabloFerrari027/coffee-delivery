import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { PiCoffeeFill } from "react-icons/pi";

export default function Presentation() {
  return (
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
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
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
  );
}
