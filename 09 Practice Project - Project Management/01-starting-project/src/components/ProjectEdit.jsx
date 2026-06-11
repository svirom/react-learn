export default function ProjectEdit({project}) {
  return (
    <>
      <p>Project edit</p>
      <p>{project.title}</p>
      <p>{project.description}</p>
      <p>{project.date}</p>
      <p>{project.id}</p>
    </>
  );
}