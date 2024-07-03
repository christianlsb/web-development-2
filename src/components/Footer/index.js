import "./styles.css"

export function Footer(){
    return(
        <footer>
            <div className="footer-links">
                <h2>
                    SkinsBonitinhas
                </h2>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Início</a>
                        </li>
                        <li>
                            <a href="/products">Produtos</a>
                        </li>
                        <li>
                            <a href="/contact">Contato</a>
                        </li>
                        <li>
                            <a href="/about">Sobre</a>
                        </li>
                    </ul>
                </nav>
                <div className="email-num">
                    <span>
                        skinsbonitinhas@gmail.com |{" "}
                    </span>
                    <span>
                        (11) 4002-8922
                    </span>
                </div>
            </div>
        </footer>
    )
}