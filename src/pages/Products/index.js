import React, { useEffect, useState } from "react";
import api from "../../api";
import { ItemsProducts } from "../../components";

export function Products() {
  const [getKnifes, setKnifes] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      const knifes = response.data.filter(
        (product) => product.category.name === "Facas"
      );
      setKnifes(knifes);
    });
  }, []);

  return (
    <>
      <h2>CSGO</h2>

      <ItemsProducts items={getKnifes} />
    </>
  );
}
