import React, { useEffect, useState } from "react";
import api from "../../api";
import Slider from "react-slick";
import { ItemsHome } from "../../components";

export function Home() {
  const [getPistols, setPistols] = useState([]);
  const [getKnifes, setKnifes] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      const pistols = response.data.filter(
        (product) => product.category.name === "Pistolas"
      );
      const knifes = response.data.filter(
        (product) => product.category.name === "Facas"
      );
      setPistols(pistols);
      setKnifes(knifes);
    });
  }, []);

  return (
    <>
      <h2>CSGO</h2>

      <ItemsHome items={getKnifes} />
    </>
  );
}
