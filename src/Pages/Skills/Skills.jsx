import React from 'react';
import Container from '../../Components/Container';
import './Skills.css'
import image1 from "../../assets/tech-skill/html5.png"

const Skills = () => {
   return (
      <div className='bg-[#212529]'>
         <Container>
            <div className="text-center tech-skill" data-aos="fade-up" data-aos-duration="1000">
               <h1 className="summary">Summary</h1>
               <h2 className="skill">My Skill</h2>
               <hr />
            </div>

            
            

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-32'>
               <div className='flex justify-center items-center border-[2px] border-[#292D32] hover:shadow-md hover:shadow-[#20c997] rounded-md p-2 transition'>
                  <div className='mr-3'>
                     <img src={image1} alt=""/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-lg font-bold'>HTML5</h2>
                     <p className='text-[18px] italic'>HTML is the standard markup language for creating the structure and content of web pages.</p>
                  </div>
               </div>
            </div> */}
         </Container>
      </div>
   );
};

export default Skills;