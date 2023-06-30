import React from 'react';
import Banner from '../Pages/Banner/Banner';
import AboutMe from '../Pages/AboutMe/AboutMe';
import Skills from '../Pages/Skills/Skills';
import Project from '../Pages/Project/Project';
import Contact from '../Pages/Contact/Contact';

const Main = () => {
   return (
      <div>
         <Banner />
         <AboutMe />
         <Skills />
         <Project />
         <Contact />
      </div>
   );
};

export default Main;