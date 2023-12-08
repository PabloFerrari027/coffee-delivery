import React from "react";
import ReactDOM from "react-dom/client";

import "./globals.css";
import "./index.css";

import ProductsProvider from "./providers/ProductsProvider.tsx";
import { routers } from "./http/routes/index.tsx";
import { RouterProvider } from "react-router-dom";
import Header from "./components/Header/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      <Header />

      <RouterProvider router={routers} />
    </ProductsProvider>
  </React.StrictMode>
);
