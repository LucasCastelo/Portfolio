import React, { useEffect } from 'react';
import Intro from './components/sections/Intro';
import About from './components/sections/About';
import Qualifications from './components/sections/Qualifications';
import Portfolio from './components/sections/Portfolio';

//CONTEXT
import { LanguagesProvider } from './contexts/Languages';
import './components/css/main.css';

//MATERIALIZE IMPORT
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <LanguagesProvider>
      <div
        className='App hide-y'
        style={{ maxWidth: '100vw', backgroundColor: '#2A363B' }}
      >
        <Intro />
        <About />
        <Qualifications />
        <Portfolio />
        <Contact />
      </div>
    </LanguagesProvider>
  );
}

export default App;
