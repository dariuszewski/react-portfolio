import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';

export default function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
    </div>
  );
}