import App from "@/App";
import Checkout from "@/pages/Checkout";
import OrderConfirmed from "@/pages/OrderConfirmed";
import { createBrowserRouter } from "react-router-dom";

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "checkout",
    Component: Checkout,
  },
  {
    path: "order/confirmed",
    Component: OrderConfirmed,
  },
]);
