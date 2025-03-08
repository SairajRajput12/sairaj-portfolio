import './App.css'
import { HashRouter } from "react-router-dom";
import Home1 from './pages/Home/Home1.jsx'; 
import About from './pages/About/AboutMe.jsx'; 
import Contact from './pages/Contact/ContactMe.jsx';
// import Achievement from './pages/Achievement/Achievement.jsx';
// import Experience from './pages/Experience/Experience.jsx';
import Project from './pages/Project/Project.jsx';
import Skills from './pages/Skill/Skills.jsx';
import ExperienceTimeline from './pages/Experience/TimeLine.jsx';
// import ExperienceTimeline from './pages/Experience/TimeLine.jsx';
// import Navigation from './components/Navigation.jsx';

function App() {

  return (
    <HashRouter>
      <div className="app-container">
        <div className="content">
          <section id="home"><Home1 /></section>
          <section id="about"><About /></section>
          <section id="experience"><ExperienceTimeline /></section>
          <section id="skills"><Skills /></section>
          <section id="project"><Project /></section> 
          {/* <section id="achievement"><Achievement /></section> */}
         <section id="contact"><Contact /></section>
        </div>
      </div>
    </HashRouter>
  )
}

export default App;
