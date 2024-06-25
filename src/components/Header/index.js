import { Link } from "react-router-dom";
import "./styles.css";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">
              <span className="icon-home"></span>Home
            </a>
          </li>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/sobre">Contate-nos</a>
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
