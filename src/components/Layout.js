import React from 'react';
import Sidebar from './Sidebar';
import Splash from './Splash';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import ScrollBtn from './ScrollBtn';


function Layout() {
  return (
    <>
        <Sidebar/>
        <main>
          <Splash /> 
          <About />
          <Portfolio />
          <Resume />
          <Contact />          
          <ScrollBtn />
        </main>
    </>
  );
}

export default Layout;