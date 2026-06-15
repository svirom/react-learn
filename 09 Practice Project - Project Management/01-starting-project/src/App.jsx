import { useState, useRef } from 'react';
import noProjectsImage from './assets/no-projects.png';
import Sidebar from './components/Sidebar';
import ProjectAdd from './components/ProjectAdd';
import ProjectEdit from './components/ProjectEdit';
import ModalProjectAdded from './components/ModalProjectAdded';

function getProjects() {
  return JSON.parse(localStorage.getItem('projects')) || [];
}

function App() {
  const [projectData, setProjectData] = useState(getProjects);
  const [mainState, setMainState] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const dialog = useRef();

  function setProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  function renderAddForm() {
    setMainState('ProjectAdd');
    setSelectedProject(null);
  }

  function resetForm() {
    setMainState('');
    setSelectedProject(null);
  }

  function handleAddProject(newProject) {
    const project = { ...newProject, id: Date.now() };
    const updated = [...projectData, project];
    setProjectData(updated);
    setProjects(updated);
    setSelectedProject(project);
    setMainState('ProjectEdit');
    dialog.current.open();
  }

  function handleDeleteProject(project) {
    const updated = projectData.filter((el) => el.id !== project.id);
    setProjectData(updated);
    setProjects(updated);
    setMainState('');
    setSelectedProject(null);
  }

  function currentProject(project) {
    setSelectedProject(project);
    setMainState('ProjectEdit');
  }

  function addTask(taskValue) {
    const updated = {
      ...selectedProject,
      tasks: [...(selectedProject.tasks || []), taskValue],
    };
    const updatedData = projectData.map((el) =>
      el.id === updated.id ? updated : el,
    );
    setSelectedProject(updated);
    setProjectData(updatedData);
    setProjects(updatedData);
  }

  function removeTask(task) {
    const updated = {
      ...selectedProject,
      tasks: (selectedProject.tasks || []).filter((el) => el !== task),
    };
    const updatedData = projectData.map((el) =>
      el.id === updated.id ? updated : el,
    );
    setSelectedProject(updated);
    setProjectData(updatedData);
    setProjects(updatedData);
  }

  return (
    <div className="flex">
      <Sidebar
        projects={projectData}
        handleAddProject={renderAddForm}
        onSelectedProject={currentProject}
        selectedProjectId={selectedProject?.id}
      />
      <main className="flex-1">
        <ModalProjectAdded ref={dialog} />
        {mainState === 'ProjectAdd' ? (
          <ProjectAdd
            handleResetForm={resetForm}
            handleSaveProject={handleAddProject}
          />
        ) : mainState === 'ProjectEdit' ? (
          <ProjectEdit
            project={selectedProject}
            deleteProject={handleDeleteProject}
            addTask={addTask}
            removeTask={removeTask}
          />
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
