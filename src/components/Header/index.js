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
      <div>
        <nav>
          <ul>
            <li>
              <a href="/category/Pistolas">Pistolas</a>
            </li>
            <li>
              <a href="/category/Facas">Facas</a>
            </li>
            <li>
              <a href="/category/Luvas">Luvas</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="cart">
        <span className="icon-cart"></span>
        <span className="cart-count">0</span>
      </div>
    </header>
  );
}
