import "./styles.css";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <main className="home-main">
            <section className="home-section">
                <h1 className="title-h1">Bem vindo ao SkinsBonitinhas!</h1>
                <h2 className="title-h2">Um website para navegar de forma fácil, pelas skins do jogo!</h2>
            </section>
            <section className="home-section">
                <h2 className="title-h2">Acesse nosso catalogo de skins para saber mais!</h2>
                <div className="row">
                    <button className="catalog-btn">
                        <Link className="" to={`category/Pistolas`} target="_blank">PISTOLAS</Link>
                    </button>
                    <button className="catalog-btn">
                        <Link className="" to={`category/Facas`} target="_blank">FACAS</Link>
                    </button>
                    <button className="catalog-btn">
                        <Link className="" to={`category/Luvas`} target="_blank">LUVAS</Link>
                    </button>
                </div>
            </section>
        </main>
    )
}