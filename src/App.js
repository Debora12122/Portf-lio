function Header() {
  return (
    <header>
      <h1>Meu Portfólio</h1>
      <nav>
        <a href="#projects">Projetos</a>
      </nav>
    </header>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <ul>
        <li>Projeto 1 - Site pessoal</li>
        <li>Projeto 2 - Loja virtual</li>
        <li>Projeto 3 - Aplicativo de tarefas</li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Projects />
      <p>Bem-vindo ao meu portfólio em React!</p>
    </div>
  );
}

export default App;



