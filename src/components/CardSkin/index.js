import "./styles.css";

export function CardSkin({ name }) {
  return (
    <div className="container">
      <div className="content">
        <h3>{name}</h3>
        <img
          src="https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_hy_ddpat_urb_light_png.png"
          alt="Imagem do produto"
        />
        <button className="add-cart">Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
