import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Product } from "./pages";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
