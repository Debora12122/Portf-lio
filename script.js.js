// Array com seus projetos
const projetos = [
  {
    titulo: "Portfólio Pessoal",
    descricao: "Primeira versão do meu portfólio profissional, feito com HTML, CSS e JavaScript.",
    link: "https://github.com/deboraoliveira2122/portfolio"
  },
  {
    titulo: "Clone de Página",
    descricao: "Projeto de prática recriando a página inicial do Google.",
    link: "https://github.com/deboraoliveira2122/clone-google"
  },
  {
    titulo: "Sistema de Cadastro",
    descricao: "Aplicação simples para cadastro de usuários feita em JavaScript.",
    link: "https://.com/deboraoliveira2122/sistema-cadastro"
  }
];

// Função para renderizar os projetos dinamicamente
function renderizarProjetos() {
  const container = document.getElementById("lista-projetos");
  projetos.forEach(projeto => {
    const div = document.createElement("div");
    div.classList.add("projeto");
    div.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
    `;
    container.appendChild(digithubv);
  });
}

// Executa a função ao carregar a página
renderizarProjetos();
