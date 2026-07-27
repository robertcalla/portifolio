import { useReveal } from "../useReveal.js";

export const BIO =
  "Mais de 3 anos projetando sistemas Front-end de alta performance. Gosto de problemas " +
  "de arquitetura, de código que escala sem drama, e de deixar rastros de decisão " +
  "claros para o próximo engenheiro.";

export const STACK = ["Javascript", "Python", "TypeScript", "C++", "MySQL", "Assembly", "SCSS", "GODOT"];

export default function About() {
  const [bioRef, bioVisible] = useReveal();
  const [stackRef, stackVisible] = useReveal();

  return (
    <section id="about" className="section about-grid">
      <div ref={bioRef} className={`reveal${bioVisible ? " in-view" : ""}`}>
        <p className="section-label">Sobre</p>
        <p className="bio">{BIO}</p>
      </div>
      <div
        ref={stackRef}
        className={`reveal${stackVisible ? " in-view" : ""}`}
        style={{ transitionDelay: "120ms" }}
      >
        <p className="section-label">Stack</p>
        <ul className="stack">
          {STACK.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
