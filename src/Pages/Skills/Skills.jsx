import React from 'react';
import Container from '../../Components/Container';
import './Skills.css'
import { skills } from '../../data/data'

const Skills = () => {
  return (
    <div className='bg-[#212529] pt-10 pb-16' id='skills'>
      <Container>
        {/* Section Heading */}
        <div className="text-center tech-skill relative" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-[#292D32] text-[60px] md:text-[90px] xl:text-[128px] font-bold uppercase">Summary</h1>
          
          <h2 className="text-white text-[20px] md:text-[30px] xl:text-[40px] font-bold absolute top-[29%] left-[43%] md:top-[31%] md:left-[36%] xl:top-[35%] xl:left-[45%]">My Skill</h2>

          <hr className='w-[4em] md:w-[5em] bg-[#20C997] border-x-0 border-t-0 p-[2px] absolute top-[66%] left-[44%] md:top-[70%] md:left-[47%] xl:top-[71%] xl:left-[48%]'/>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5 pt-5'>
          {
            skills.map((skill, index) => (
              <div key={index} className='skill-card px-3 py-4 group' data-aos="fade-up" data-aos-duration="1500">
                <div>
                  <img src={skill.image} alt={skill.name} loading="lazy" className='w-auto h-14 mx-auto mb-3 group-hover:scale-110 duration-300' />
                  <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>{skill.name}</h2>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  );
};

export default Skills;
