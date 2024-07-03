import { Link } from "react-router-dom";
import "./styles.css";
import { useState } from "react";

export function CardSkin({ name, image, id, btnView }) {
  // criar condição botão visualização

  const[myArray, setMyArray] = useState([]);

  const addSkin = () => {
    const newSkin = name;
    const newArray = [...myArray, newSkin];

    localStorage.setItem('skinName', JSON.stringify(newArray))
  }

  return (
    <div className="container">
      <div className="content">
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <button onClick={addSkin} className="add-cart">Adicionar ao carrinho</button>
        {btnView && (
          <button className="view-details">
            <Link className="link-details" to={`/product/${id}`}>Visualizar o produto</Link>
          </button>
        )}
      </div>
    </div>
  );
}
