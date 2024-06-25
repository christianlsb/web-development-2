import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Product } from "./pages";
import { Header } from "./components";

export default function RoutesApp() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <footer>aqui</footer>
    </>
  );
}
