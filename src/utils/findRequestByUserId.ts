import requests from "@/mocks/requests";

interface IFindRequestById {
  id: string;
}

export async function findRequestByUserId({ id }: IFindRequestById) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });

  const request = requests.find((p) => p.id === id) || null;

  if (!request) return null;

  return { timer: "20 min - 30 min", ...request };
}
