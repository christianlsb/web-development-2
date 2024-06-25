import { CardSkin } from "../CardSkin";
import "./styles.css";

export function ItemsHome({ items }) {
  return (
    <div className="container-items">
      {items.map(({ name, image, id}, index) => (
        <CardSkin key={index} name={name} image={image} id={id} btnView/>
      ))}
    </div>
  );
}