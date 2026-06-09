import { useState } from 'react';
import noProjectsImage from './assets/no-projects.png';
import Sidebar from './components/Sidebar';
import Form from './components/Form';

function App() {
  // const projects = [
  //   {
  //     "title": "Project 1",
  //     "description": "Lorem ipsum lorem ipsum lorem ipsum",
  //     "due-time": "2026-06-25",
  //     "tasks": ['learn Javascript', 'learn Reactjs', 'learn Nextjs']
  //   },
  //   {
  //     "title": "Project 2",
  //     "description": "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //     "due-time": "2026-06-28",
  //     "tasks": ['learn HTML', 'learn CSS', 'learn SCSS']
  //   },
  // ];

  const [projectData, setProjectData] = useState([]);
  const [isFormActive, setIsFormActive] = useState(false);

  function renderAddForm() {
    setIsFormActive(true);
  }

  function resetForm() {
    setIsFormActive(false);
  }

  function handleAddProject(newProject) {
    setProjectData(prevProjectData => [...prevProjectData, newProject]);
  }

  return (
    <div className="flex">
      <Sidebar projects={projectData} handleAddProject={renderAddForm} />
      <main className="flex-1">
        {isFormActive ? (
          <Form handleResetForm={resetForm} handleSaveProject={handleAddProject} />
        ) : (
          <div className="flex flex-col items-center pt-20">
            <img src={noProjectsImage} className="w-16" />
            <h3 className="text-xl font-bold text-stone-700 mt-5 mb-4">
              No Project Selected
            </h3>
            <p className="text-stone-500 mb-6">
              Select a project or get started with a new one
            </p>
            <button
              onClick={renderAddForm}
              className="text-stone-300 py-2 px-3 rounded-md bg-stone-700"
            >
              Create new project
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
