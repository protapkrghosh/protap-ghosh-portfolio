import React from 'react';
import Container from '../../Components/Container';
import './Skills.css'

const Skills = () => {
   return (
      <div className='bg-[#212529]'>
         <Container>
            <div className="text-center tech-skill" data-aos="fade-up" data-aos-duration="1000">
               <h1 className="summary">Summary</h1>
               <h2 className="skill">My Skill</h2>
               <hr />
            </div>
         </Container>
      </div>
   );
};

export default Skills;