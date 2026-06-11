import { useState, useRef } from 'react';
import noProjectsImage from './assets/no-projects.png';
import Sidebar from './components/Sidebar';
import ProjectAdd from './components/ProjectAdd';
import ProjectEdit from './components/ProjectEdit';
import ModalProjectAdded from './components/ModalProjectAdded';

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
  const [mainState, setMainState] = useState('');
  const [selectedProject, setSelectedProject] = useState({});
  const dialog = useRef();

  function renderAddForm() {
    setMainState('ProjectAdd');
  }

  function resetForm() {
    setMainState('');
  }

  function handleAddProject(newProject) {
    const project = { ...newProject, id: Date.now() };
    setProjectData((prevProjectData) => [...prevProjectData, project]);
    setSelectedProject(project);
    setMainState('ProjectEdit');
    dialog.current.open();
  }

  function currentProject(project) {
    setSelectedProject(project);
    setMainState('ProjectEdit');
  }

  return (
    <div className="flex">
      <Sidebar
        projects={projectData}
        handleAddProject={renderAddForm}
        onSelectedProject={currentProject}
      />
      <main className="flex-1">
        <ModalProjectAdded ref={dialog} />
        {mainState === 'ProjectAdd' ? (
          <ProjectAdd
            handleResetForm={resetForm}
            handleSaveProject={handleAddProject}
          />
        ) : mainState === 'ProjectEdit' ? (
          <ProjectEdit project={selectedProject} />
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
