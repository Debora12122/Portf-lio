const projetos = [
  { id: 1, titulo: "Site pessoal", descricao: "Meu primeiro site em React" },
  { id: 2, titulo: "Loja virtual", descricao: "E-commerce simples com carrinho" },
  { id: 3, titulo: "Aplicativo de tarefas", descricao: "App para organizar atividades diárias" }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <ul>
        {projetos.map((proj) => (
          <li key={proj.id}>
            <strong>{proj.titulo}</strong> - {proj.descricao}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
