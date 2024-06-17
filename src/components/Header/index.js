import { Link } from "react-router-dom";
import "./styles.css";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span className="icon-home"></span>Home
            </Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/sobre">Contate-nos</Link>
          </li>
        </ul>
      </nav>
      <div className="cart">
        <span className="icon-cart"></span>
        <span className="cart-count">0</span>
      </div>
    </header>
  );
}
