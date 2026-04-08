// Array de projetos (mínimo 3)
const projetos = [
  {
    titulo: "Portfólio MVP",
    descricao: "Primeira versão do meu portfólio profissional, desenvolvido com HTML, CSS e JavaScript.",
    link: "https://debora12122.github.io/Portf-lio/"
  },
  {
    titulo: "Página de Estudos",
    descricao: "Um site criado para organizar meus conteúdos de estudo, com seções para anotações e links úteis.",
    link: "#"
  },
  {
    titulo: "Lista de Tarefas",
    descricao: "Exemplo de aplicação em JavaScript para adicionar e remover tarefas dinamicamente.",
    link: "#"
  }
];

// Renderização dinâmica
const container = document.getElementById("projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${projeto.titulo}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver projeto</a>
  `;
  container.appendChild(div);
});
