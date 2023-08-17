import Navbar from './Components/Navbar/Navbar'
import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
