import React, {useState} from "react";
import Header from "./components/Header";

function App() {
  const [projects, setProject] = useState(['Desenvolvimento de app', 'FrontEndWeb']);

  function handleAddProject() {

      setProject([...projects, `Novo Projeto ${Date.now()}`]);

      console.log(projects);
  }

  return  (
    <>  
    <Header title="Projects"></Header>
    
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
    
      <button type="button" onClick={handleAddProject}> Add Project </button>
    </>
  );
}

export default App;