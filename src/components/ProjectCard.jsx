import { useReveal } from "../useReveal.js";

export default function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();

  return (
    <article
      ref={ref}
      className={`card reveal${visible ? " in-view" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {project.link ? (
        <a
          className="thumb-link"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver projeto ${project.name}`}
        >
          {project.image ? (
            <img className="thumb-img" src={project.image} alt="" />
          ) : (
            <div className="thumb" aria-hidden="true" />
          )}
        </a>
      ) : project.image ? (
        <img
          className="thumb-img"
          src={project.image}
          alt={`${project.name} — captura de tela do projeto`}
        />
      ) : (
        <div
          className="thumb"
          role="img"
          aria-label={`${project.name} — captura de tela do projeto`}
        />
      )}
      <div className="card-title">
        <h3>{project.name}</h3>
        {(project.place || project.period) && (
          <p className="card-meta">
            {[project.place, project.period].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
      <p>{project.description}</p>
      <ul className="tags">
        {project.tags.map((tag) => (
          <li
            className={`tag${tag.variant ? ` tag-${tag.variant}` : ""}`}
            key={tag.label}
          >
            {tag.label}
          </li>
        ))}
      </ul>
    </article>
  );
}
