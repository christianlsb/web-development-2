import React, { useEffect, useState } from "react";
import { Header, ItemsHome } from "../../components";
import api from "../../api";

export function Home() {
  const [getData, setData] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <ItemsHome items={getData} />
    </>
  );
}
