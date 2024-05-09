import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState('dark'); 

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }

	return (
		<div className="App">
			<Navbar mode={mode} toggleMode={toggleMode}/>
      <Home mode={mode} toggleMode={toggleMode}/>
      <About mode={mode} toggleMode={toggleMode}/>
      <Portfolio mode={mode} toggleMode={toggleMode}/>
      <Skills mode={mode} toggleMode={toggleMode}/>
      <Contact mode={mode} toggleMode={toggleMode}/>
      <SocialLinks mode={mode} toggleMode={toggleMode}/>
		</div>
	);
}

export default App;
