import React, { useEffect, useState } from "react";
import { CardSkin } from "../../components";
import api from "../../api";
import { useParams } from "react-router-dom";
import "./styles.css"

export function Product() {
  const { productId } = useParams();

  const [skin, setSkin] = useState(null);
  const isSkinLoading = skin === null

  useEffect(() => {
    api.get().then((response) => {
      const item = response.data.find((product) => product.id === productId);
      setSkin(item);
    });
  }, [productId]);

  if (isSkinLoading) {
    return null;
  }

  const itemDescription = skin.description
    .replace(/<\/?[^>]+>/gi, '')
    .replace(/(?:\\[rn"\"]|[\r\n]+<\/?[^>]+)+/gi, '');


  return (
    <main className="product-container">
      <h1 className="product-title">
        Categoria - {skin.category.name}
      </h1>
      <h2 className="product-title">
        Raridade - {skin.rarity.name}
      </h2>
      <CardSkin name={skin.name} image={skin.image} id={skin.id} />
      <div className="product-description">
        <h3 className="description-title">Descrição:</h3>
        <p className="description-text">{itemDescription}</p>
      </div>
    </main>
  );
}