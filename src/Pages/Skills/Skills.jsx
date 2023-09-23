import React from 'react';
import Container from '../../Components/Container';
import './Skills.css'
import image1 from "../../assets/tech-skill/html5.png"
import image2 from "../../assets/tech-skill/bootstrap.png"
import image3 from "../../assets/tech-skill/expressjs.png"
import image4 from "../../assets/tech-skill/firebase.png"
import image5 from "../../assets/tech-skill/CSS3.png"
import image6 from "../../assets/tech-skill/nodejs.png"
import image7 from "../../assets/tech-skill/mongodb.png"
import image8 from "../../assets/tech-skill/react.png"
import image9 from "../../assets/tech-skill/tailwand.png"
import image10 from "../../assets/tech-skill/Git.png"
import image11 from "../../assets/tech-skill/javascript.png"
import image12 from "../../assets/tech-skill/canva.png"
import image13 from "../../assets/tech-skill/Figma.png"
import image14 from "../../assets/tech-skill/GitHub.png"
import image15 from "../../assets/tech-skill/vscode.png"
import image16 from "../../assets/tech-skill/Nextjs.png"
import image17 from "../../assets/tech-skill/jest.png"

const Skills = () => {
  return (
    <div className='bg-[#212529] pt-10 pb-16' id='skills'>
      <Container>
        <div className="text-center tech-skill" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="summary">Summary</h1>
          <h2 className="skill">My Skill</h2>
          <hr />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5 pt-5'>

          <div className='skill-card p-3' data-aos="fade-right" data-aos-duration="1500">
            <div>
              <img src={image1} alt="HTML" className='w-16 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>HTML5</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="fade-up" data-aos-duration="1500">
            <div>
              <img src={image2} alt="Bootstrap" className='w-16 mx-auto mb-3' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>Bootstrap</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="flip-left" data-aos-duration="1500">
            <div>
              <img src={image3} alt="Express" className='w-16 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>Express Js</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="zoom-in" data-aos-duration="1500">
            <div>
              <img src={image4} alt="Firebase" className='w-16 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>Firebase</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="fade-down" data-aos-duration="1500">
            <div>
              <img src={image5} alt="CSS3" className='w-16 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>CSS3</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="fade-up-right" data-aos-duration="1500">
            <div>
              <img src={image6} alt="Node" className='w-14 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>Node Js</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="zoom-in-up" data-aos-duration="1500">
            <div>
              <img src={image7} alt="MongoDB" className='w-16 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>MongoDB</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="fade-right" data-aos-duration="1500">
            <div>
              <img src={image8} alt="React" className='w-14 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>React</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="fade-up" data-aos-duration="1500">
            <div>
              <img src={image10} alt="Git" className='w-14 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>Git</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="zoom-out" data-aos-duration="1500">
            <div>
              <img src={image9} alt="Tailwind" className='w-20 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>Tailwind CSS</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="flip-right" data-aos-duration="1500">
            <div>
              <img src={image11} alt="JavaScript" className='w-14 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>JavaScript</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="fade-down" data-aos-duration="1500">
            <div>
              <img src={image12} alt="Canva" className='w-14 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>Canva</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="zoom-in" data-aos-duration="1500">
            <div>
              <img src={image13} alt="Figma" className='w-14 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>Figma</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="fade-up" data-aos-duration="1500">
            <div>
              <img src={image14} alt="GitHub" className='w-16 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>GitHub</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="zoom-out-left" data-aos-duration="1500">
            <div>
              <img src={image15} alt="Vscode" className='w-16 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>VS Code</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="flip-up" data-aos-duration="1500">
            <div>
              <img src={image16} alt="Next" className='mx-auto' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>Next Js</h2>
            </div>
          </div>

          <div className='skill-card p-3' data-aos="zoom-in-up" data-aos-duration="1500">
            <div>
              <img src={image17} alt="Jest" className='w-14 mx-auto mb-2' />
              <h2 className='text-[18px] text-[#908F91] font-semibold text-center'>Jest</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;