import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';

export default function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
    </div>
  );
}