function Projects({ projects }) {
  return (
    <section>
      <h2>Meus Projetos</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">Ver projeto</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
