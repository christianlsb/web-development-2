import "./styles.css";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <main className="home-main">
            <section className="home-section">
                <h1 className="title-h1">Bem vindo ao CSGO SKINS!</h1>
                <h2 className="title-h2">Um website para navegar de forma fácil, pelas skins do jogo!</h2>
            </section>
            <section className="home-section row">
                <img className="home-img rotate" alt="Pistola Desert Eagle" src="https://d2d9vfag1luski.cloudfront.net/55095e26-e042-4d54-811b-b11e3c5fbee7-front@3x.webp" />
                <img className="home-img " alt="Pistola Desert Eagle" src="https://d2d9vfag1luski.cloudfront.net/55095e26-e042-4d54-811b-b11e3c5fbee7-front@3x.webp" />
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