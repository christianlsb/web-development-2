import "./styles.css";

export function AboutSection() {
  return (
    <div className="container">
      <section>
        <h1>Conheça mais sobre nós</h1>
        <p>
          <span>SkinsBonitinhas</span> o melhor site de compras de skins do
          Brasil.
        </p>
      </section>
      <section>
        <ul>
          <li>
            <div>
              <h2>Visão</h2>
              <p>Ser a maior empresa de skins do Brasil.</p>
              <p>Oferecer skins de qualidade para nossos clientes.</p>
            </div>
          </li>
          <li>
            <div>
              <h2>Missão</h2>
              <p>Entregar skins de qualidade para nossos clientes.</p>
              <p>Oferecer um serviço de qualidade.</p>
            </div>
          </li>
          <li>
            <div>
              <h2>Valores</h2>
              <p>Respeito ao cliente.</p>
              <p>Qualidade nos produtos.</p>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h2>Quem somos</h2>
        <p>
          Somos uma empresa que se preocupa com a qualidade dos produtos
          oferecidos aos nossos clientes.
        </p>
        <p>
          Nossos produtos são feitos com os melhores materiais, para garantir a
          satisfação dos nossos clientes.
        </p>
      </section>
    </div>
  );
}
