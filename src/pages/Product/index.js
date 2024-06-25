import React, { useEffect, useState } from "react";
import { CardSkin } from "../../components";
import api from "../../api";
import { useParams } from "react-router-dom";

export function Product() {
  const { productId } = useParams();

  const [skin, setSkin] = useState({});

  useEffect(() => {
    api.get().then((response) => {
      const item = response.data.find((product) => product.id === productId);
      setSkin(item);
    });
  }, [productId]);

  console.log(skin);
  return (
    <div>
      <CardSkin name={skin.name} image={skin.image} id={skin.id} />
    </div>
  );
}
