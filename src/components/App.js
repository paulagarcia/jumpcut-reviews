import React from 'react';
// Local Sections
import Menu from './Menu';
import LandingPage from './LandingPage';
import Stories from './Stories';
import Students from './Students';
import Experience from './Experience';
// Improvemnts on Material
import CssBaseline from '@material-ui/core/CssBaseline';


const App = () => {
  return (
    <>
    <CssBaseline />
    <Menu />
    <LandingPage />
    <Stories />
    <Students />
    <Experience />

    </>
  );
}


export default App;
