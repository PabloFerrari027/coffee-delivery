import React from "react";
import ReactDOM from "react-dom/client";

import "./globals.css";
import "./index.css";

import ProductsProvider from "./providers/ProductsProvider.tsx";
import { routers } from "./http/routes/index.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      <RouterProvider router={routers} />
    </ProductsProvider>
  </React.StrictMode>
);
