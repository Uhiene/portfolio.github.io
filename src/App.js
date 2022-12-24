import About from "./components/About";
import Articles from "./components/Articles";
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
      <Work />
      <Articles/>
      <Contact />
    </div>
  );
}

export default App;
