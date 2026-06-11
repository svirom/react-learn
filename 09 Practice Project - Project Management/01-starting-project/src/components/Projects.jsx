export default function Projects({ projects, handleSelectProject }) {
  return (
    <ul>
      {projects &&
        projects.map((project) => (
          <li
            key={project.id}
            className="text-white hover:cursor-pointer"
            onClick={() => handleSelectProject(project)}
          >
            {project.title}
          </li>
        ))}
    </ul>
  );
}
