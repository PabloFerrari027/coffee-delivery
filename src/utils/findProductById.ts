import products from "@/mocks/products";

interface IFindProductById {
  id: string;
}

export async function findProductById({ id }: IFindProductById) {
  return products.find((p) => p.id === id) || null;
}
