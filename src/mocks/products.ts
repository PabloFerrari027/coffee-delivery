interface IProduct {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  imgURL: string;
  price: number;
}

const products: IProduct[] = [
  {
    id: "1",
    title: "Expresso Tradicional",
    summary: "O tradicional café feito com água quente e grãos moídos",
    tags: ["tradicional"],
    imgURL: "/coffee-1.svg",
    price: 9.9,
  },
  {
    id: "2",
    title: "Expresso Americano",
    summary: "Expresso diluído, menos intenso que o tradicional",
    tags: ["tradicional"],
    imgURL: "/coffee-2.svg",
    price: 9.9,
  },
  {
    id: "3",
    title: "Expresso Cremoso",
    summary: "Café expresso tradicional com espuma cremosa",
    tags: ["tradicional"],
    imgURL: "/coffee-3.svg",
    price: 9.9,
  },
  {
    id: "4",
    title: "Expresso Gelado",
    summary: "O tradicional café feito com água quente e grãos moídos",
    tags: ["tradicional", "gelado"],
    imgURL: "/coffee-4.svg",
    price: 9.9,
  },
  {
    id: "5",
    title: "Café com Leite",
    summary: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["tradicional", "com leite"],
    imgURL: "/coffee-5.svg",
    price: 9.9,
  },
  {
    id: "6",
    title: "Latte",
    summary: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["tradicional", "com leite"],
    imgURL: "/coffee-6.svg",
    price: 9.9,
  },
  {
    id: "7",
    title: "Capuccino",
    summary: "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["tradicional", "com leite"],
    imgURL: "/coffee-7.svg",
    price: 9.9,
  },
  {
    id: "8",
    title: "Macchiato",
    summary: "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["tradicional", "com leite"],
    imgURL: "/coffee-8.svg",
    price: 9.9,
  },
  {
    id: "9",
    title: "Mocaccino",
    summary: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["tradicional", "com leite"],
    imgURL: "/coffee-9.svg",
    price: 9.9,
  },
  {
    id: "10",
    title: "Chocolate Quente",
    summary: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["especial", "com leite"],
    imgURL: "/coffee-10.svg",
    price: 9.9,
  },
  {
    id: "11",
    title: "Cubano",
    summary: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["especial", "alcoólico", "gelado"],
    imgURL: "/coffee-11.svg",
    price: 9.9,
  },
  {
    id: "12",
    title: "Havaiano",
    summary: "Bebida adocicada preparada com café e leite de coco",
    tags: ["especial"],
    imgURL: "/coffee-12.svg",
    price: 9.9,
  },
  {
    id: "13",
    title: "Árabe",
    summary: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["especial"],
    imgURL: "/coffee-13.svg",
    price: 9.9,
  },
  {
    id: "14",
    title: "Irlandês",
    summary: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["especial", "alcoólico"],
    imgURL: "/coffee-14.svg",
    price: 9.9,
  },
];

export default products;
