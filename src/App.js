import About from "./components/About";
import Carosel from "./components/Carosel";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div className="bg-[#0a192f]">
      <Navbar />
      <div className="h-20 md:0"></div>
      <Home />
      <About />
      <Skills />
      <Carosel/>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
