import { Link } from "react-router-dom";
import "./styles.css";

export function CardSkin({ name, image, id, btnView }) {
  // criar condição botão visualização

  return (
    <div className="container">
      <div className="content">
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <button className="add-cart">Adicionar ao carrinho</button>
        {btnView && (
          <button className="view-details">
            <Link className="" to={`/product/${id}`}>Visualizar o produto</Link>
          </button>
        )}
      </div>
    </div>
  );
}
