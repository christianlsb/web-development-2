import "./styles.css";

export function CardSkin({ name, image }) {
  function priceSkin(min, max) {
    let price = Math.random() * (max - min) + min;
    return `R$${price.toFixed(2)}`;
  }

  return (
    <div className="container">
      <div className="content">
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <span className="price">{priceSkin(10, 100)}</span>
        <button className="add-cart">Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
