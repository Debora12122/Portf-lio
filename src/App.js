import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  const myProjects = [
    {
      title: "Projeto 1 - Site pessoal",
      description: "Um site pessoal simples.",
      link: "#"
    },
    {
      title: "Projeto 2 - Loja virtual",
      description: "Uma loja online com carrinho de compras.",
      link: "#"
    },
    {
      title: "Projeto 3 - Aplicativo de tarefas",
      description: "Um app para organizar tarefas diárias.",
      link: "#"
    }
  ];

  return (
    <div className="App">
      <Header />
      <Projects projects={myProjects} />
    </div>
  );
}

export default App;
