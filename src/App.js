import logo from './logo.svg';
import './App.css';
import Header from "./header/header.js";
import About from './body/about/about.js'
import Skills from './body/skills/skills.js'
import Experience from './body/experience/experience.js'
import Reach from './body/reachMe/reachme.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Experience/>
      <Reach/>
    </div>
  );
}

export default App;
