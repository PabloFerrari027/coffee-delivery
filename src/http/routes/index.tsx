import App from "@/App";
import Checkout from "@/pages/Checkout";
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
]);
