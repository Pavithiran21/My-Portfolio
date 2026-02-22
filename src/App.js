import './App.css';
import { About } from './Component/About';
import { Home } from './Component/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from './Component/Skills';
import { ProjectDetails } from './Component/Projects/ProjectDetails';
import { Contact } from './Component/Contact';
import { Background } from './Component/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <Home />
      <About />
      <Skills />
      <ProjectDetails />
      <Contact />
    </div>
  );
}

export default App;
