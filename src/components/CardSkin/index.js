import "./styles.css";

export function CardSkin({ name, image }) {
  return (
    <div className="container">
      <div className="content">
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <button className="add-cart">Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
