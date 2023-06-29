import React from 'react';
import Banner from '../Pages/Banner/Banner';
import AboutMe from '../Pages/AboutMe/AboutMe';
// import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Skills from '../Pages/Skills/Skills';
import Project from '../Pages/Project/Project';

const Main = () => {
   return (
      <div>
         <Banner />
         <AboutMe />
         <Skills />
         <Project />
      </div>
   );
};

export default Main;