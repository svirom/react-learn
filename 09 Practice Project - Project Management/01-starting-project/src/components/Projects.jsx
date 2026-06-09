export default function Projects({ projects }) {
  return (
    <ul>
      {projects &&
        projects.map((project) => (
          <li key={project.title} className="text-white">
            {project.title}
          </li>
        ))}
    </ul>
  );
}
