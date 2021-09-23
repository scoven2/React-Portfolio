import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './views/Main';
import Projects from './views/Projects';
import Resume from './views/Resume';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <NavBar />
        <Main />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
