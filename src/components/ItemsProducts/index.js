import { useState } from "react";
import { CardSkin } from "../CardSkin";
import "./styles.css";

export function ItemsProducts({ items }) {
  const [filter, setFilter] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container-items">
      <input
        className="search-input"
        placeholder="Filtrar por nome"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="container-items">
        {filteredItems.length === 0 ? (
          <p className="no-items">Nenhum item encontrado</p>
        ) : (
          filteredItems.map(({ name, image, id }, index) => (
            <CardSkin key={index} name={name} image={image} id={id} btnView />
          ))
        )}
      </div>
    </div>
  );
}
