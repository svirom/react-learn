import { useRef } from 'react';
import Tasks from './Tasks';

export default function ProjectEdit({
  project,
  deleteProject,
  addTask,
  removeTask,
}) {
  const newTask = useRef();

  function handleTask(e) {
    e.preventDefault();
    const taskValue = newTask.current.value.trim();
    if (!taskValue) return;
    addTask(taskValue);
    newTask.current.value = '';
  }

  return (
    <div className="max-w-[37.5rem] py-10 ps-8">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold text-stone-950 mb-3">
          {project.title}
        </h2>
        <button
          className="text-stone-800"
          onClick={() => deleteProject(project)}
        >
          Delete
        </button>
      </div>
      <p className="text-stone-500 mb-5">
        {new Date(project.date + 'T00:00:00').toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
      <p className="border-b-2 border-b-stone-300 mb-4 pb-4">
        {project.description}
      </p>
      <h3 className="text-2xl font-bold text-stone-950 mb-4">Tasks</h3>
      <form onSubmit={handleTask}>
        <input
          ref={newTask}
          type="text"
          className="w-72 border-b-2 border-b-stone-300 focus:border-b-stone-400 outline-none bg-stone-200 px-3 py-1.5"
          id="addTask"
        />
        <button className="text-stone-800 ps-5" type="submit">
          Add Task
        </button>
      </form>
      <Tasks project={project} removeTask={removeTask} />
    </div>
  );
}
