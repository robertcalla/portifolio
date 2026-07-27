import Terminal from "./Terminal.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <div className="availability-badge">
        <span className="pulse-dot" aria-hidden="true"></span>
        Aberto a oportunidades
      </div>
      <p className="eyebrow">// engenheiro_de_software</p>
      <h1>Construo sistemas com precisão e performance.</h1>
      <p className="lede">
        Engenheiro de software focado em arquitetura limpa, backend escalável e ferramentas
        que aguentam produção.
      </p>
      <div className="cta-row">
        <a href="#work" className="btn btn-primary">Ver projetos</a>
        <a href="#contact" className="btn btn-secondary">Contato</a>
        <a
          href="/cv.pdf"
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baixar CV
        </a>
      </div>
      <Terminal />
    </section>
  );
}
