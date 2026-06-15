export default function Tasks({ project, removeTask }) {
  return (
    <ul className="mt-10 rounded-md bg-stone-100 py-5">
      {project.tasks?.map((task, index) => (
        <li key={index} className="flex justify-between items-center gap-3 text-stone-950 py-3 px-3">
          <span>{task}</span>
          <button onClick={() => removeTask(task)}>Clear</button>
        </li>
      ))}
    </ul>
  );
}