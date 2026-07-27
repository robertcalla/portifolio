import { useReveal } from "../useReveal.js";
import ProjectCard from "./ProjectCard.jsx";

export const PROJECTS = [
  {
    name: "Seminário 'Introdução ao Módulo Vpython'",
    description: "Orientador de seminário abordando biblioteca gráfica VPython com foco em objetivos físicos.",
    place: "UNIFAP",
    period: "2023",
    image: "/projects/seminario.jpeg",
    link: "https://www2.unifap.br/dcet/",
    tags: [
      { label: "Python", variant: "cyan" },
      { label: "Interfaces" },
    ],
  },
  {
    name: "Desenvolvedor Front-end",
    description: "Melhorias na estrutura visual e de usabilidade dos modais de treinamento para Petrobras.",
    place: "TecGraf",
    period: "2024",
    image: "/projects/tecgraf.png",
    link: "https://www.tecgraf.puc-rio.br/",
    tags: [
      { label: "TypeScript", variant: "cyan" },
      { label: "GitLab", variant: "lime" },
      { label: "Figma"},
    ],
  },
  {
    name: "Jogo - Entrega Galactica",
    description: "Ingestão e agregação de métricas em tempo real para times de plataforma.",
    place: "PUC-Rio",
    period: "2025",
    image: "/projects/entregagalactica.png",
    link: "https://robertzilla.itch.io/entrega-galactica",
    tags: [
      { label: "GODOT", variant: "cyan" },
      { label: "C++", variant: "lime" },
    ],
  },
  {
    name: "Sistema MiniSteam",
    description: "Loja de jogos simplificada, projeto acadêmico da PUC-Rio construído com apoio de IA e quase pronto para entrega.",
    place: "PUC-Rio",
    period: "2026",
    image: "/projects/ministeam.jpeg",
    link: "https://github.com/robertcalla/ministeam",
    tags: [
      { label: "Python", variant: "cyan" },
      { label: "HTML", variant: "lime" },
      { label: "CSS" },
    ],
  },
];

export default function Work() {
  const [labelRef, labelVisible] = useReveal();

  return (
    <section id="work" className="section">
      <p
        ref={labelRef}
        className={`section-label reveal${labelVisible ? " in-view" : ""}`}
      >
        Projetos selecionados
      </p>
      <div className="grid grid-2">
        {PROJECTS.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.name} />
        ))}
      </div>
    </section>
  );
}
