import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produto">Produto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
