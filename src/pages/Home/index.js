import React, { useEffect, useState } from "react";
import { Header, ItemsHome } from "../../components";
import api from "../../api";
import { useQuery } from 'react-query'


export function Home() {
  // const [getData, setData] = useState([]);

  // useEffect(() => {
  //   api.get().then((response) => {
  //     setData(response.data);
  //   });
  // }, []);


  const { isLoading, error, data } = useQuery('responseData', () =>
  fetch('https://bymykel.github.io/CSGO-API/api/pt-BR/skins.json').then(res =>
    res.json([])
  )
)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.messages

    console.log(data)

  return (
    <>
      <Header />
      <ItemsHome items={data} />
    </>
  );
}
