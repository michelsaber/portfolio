import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
<BrowserRouter className="App"  >
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        
      </Routes>
    </BrowserRouter>
       
      );
}

export default App;
