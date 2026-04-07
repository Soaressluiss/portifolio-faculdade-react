export default function Projects() {
  const projects = [
    {
      name: "Projeto 01",
      description:
        "Aplicação web para gerenciamento de tarefas, com manipulação dinâmica de dados e interface responsiva.",
      link: "#",
    },
    {
      name: "Projeto 02",
      description:
        "Sistema simples de listagem de produtos com filtros e atualização dinâmica dos dados na tela.",
      link: "#",
    },
    {
      name: "Projeto 03",
      description:
        "Aplicação de cadastro de usuários com validação de formulário e exibição de informações em tempo real.",
      link: "#",
    },
  ];
  return (
    <section className="projects">
      <h2>Meus Projetos</h2>
      <div className="containerProjects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href="#" target="_blank">
              Ver projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
