import React, { useEffect } from 'react';
import Intro from './components/sections/Intro';
import About from './components/sections/About';
import Qualifications from './components/sections/Qualifications';

//CONTEXT
import { LanguagesProvider } from './contexts/Languages';
//MATERIALIZE IMPORT
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <LanguagesProvider>
      <div
        className='App'
        style={{ maxWidth: '100vw', backgroundColor: '#2A363B' }}
      >
        <Intro></Intro>
        <About></About>
        <Qualifications />
      </div>
    </LanguagesProvider>
  );
}

export default App;
