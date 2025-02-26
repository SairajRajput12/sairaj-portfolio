import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home/Home.jsx'; 
import About from './pages/About/AboutMe.jsx'; 
import Contact from './pages/Contact/ContactMe.jsx';
import Achievement from './pages/Achievement/Achievement.jsx';
import Experience from './pages/Experience/Experience.jsx';
import Project from './pages/Project/Project.jsx';
import Skills from './pages/Skill/Skills.jsx';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/achievement' element={<Achievement />}></Route>
            <Route path='/experience' element={<Experience />}></Route>
            <Route path='/project' element={<Project />}></Route> 
            <Route path='/skills' element={<Skills />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
