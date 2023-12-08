import requests from "@/mocks/requests";

interface ICreateRequest {
  userId: string;
  cep: string;
  two: string;
  twoNumber: number;
  note?: string;
  neighborhood: string;
  city: string;
  UF: string;
  paymentMethod: string;
}

export async function createRequest(data: ICreateRequest) {
  const id = `${requests.length + 1}`;
  const note = `${data.note}`;

  requests.push({ ...data, id, note });
}
