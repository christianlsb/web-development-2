import React, { useEffect, useState } from "react";
import { ItemsHome } from "../../components";
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
      <ItemsHome items={getData} />
    </>
  );
}
