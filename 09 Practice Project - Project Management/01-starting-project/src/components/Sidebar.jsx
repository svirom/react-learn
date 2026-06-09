import Projects from './Projects';

export default function Sidebar({ projects, handleAddProject }) {
  return (
    <aside className="w-80 h-screen py-10 px-6 bg-slate-900">
      <h2 className="text-2xl font-semibold text-white uppercase mb-4">
        Your Projects
      </h2>
      <button
        onClick={handleAddProject}
        className="text-slate-300 py-2 px-3 rounded-md bg-slate-600"
      >
        + Add Project
      </button>
      <div className="mt-8">
        <Projects projects={projects} />
      </div>
    </aside>
  );
}
