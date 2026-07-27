export default function Projects({
  projects,
  selectedProjectId,
  handleSelectProject,
}) {
  return (
    <ul>
      {projects &&
        projects.map((project) => (
          <li
            key={project.id}
            className={`text-xl/6 text-white rounded-md hover:bg-white/10 hover:cursor-pointer mb-1 py-1.5 px-1 ${selectedProjectId === project.id ? 'bg-white/10' : ''}`}
            onClick={() => handleSelectProject(project)}
          >
            {project.title}
          </li>
        ))}
    </ul>
  );
}
