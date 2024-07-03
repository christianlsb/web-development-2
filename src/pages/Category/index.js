import React, { useEffect, useState } from "react";
import { ItemsProducts } from "../../components";
import api from "../../api";
import { useParams } from "react-router-dom";

export function Category() {
  const { categoryId } = useParams();

  const [getItems, setItems] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      const items = response.data.filter(
        (product) => product.category.name === categoryId
      );

      setItems(items);
    });
  }, [categoryId]);

  return (
    <div>
      <ItemsProducts items={getItems} />
    </div>
  );
}
