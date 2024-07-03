import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Products, Product, Category, Home, About } from "./pages";
import { Contact } from "./pages/Contact";
import { Footer, Header } from "./components";

export default function RoutesApp() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
