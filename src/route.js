import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Product, Category } from "./pages";
import { Footer, Header } from "./components";

export default function RoutesApp() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/category/:categoryId" element={<Category />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
