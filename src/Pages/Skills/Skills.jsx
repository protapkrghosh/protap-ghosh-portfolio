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

const Skills = () => {
   return (
      <div className='bg-[#212529]'>
         <Container>
            <div className="text-center tech-skill" data-aos="fade-up" data-aos-duration="1000">
               <h1 className="summary">Summary</h1>
               <h2 className="skill">My Skill</h2>
               <hr />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-32'>

               <div className='skill-card' data-aos="zoom-in-up" data-aos-duration="1500">
                  <div className='mr-3'>
                     <img src={image1} alt="" className='w-44'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>HTML5</h2>
                     <p className='italic'>HTML is the standard markup language for creating the structure and content of web pages.</p>
                  </div>
               </div>

               <div className='skill-card' data-aos="fade-up" data-aos-duration="1500">
                  <div className='mr-3'>
                     <img src={image2} alt="" className='w-48'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>Bootstrap</h2>
                     <p className='italic'>Bootstrap is a free, open source front-end development framework for the creation of websites and web apps.</p>
                  </div>
               </div>

               <div className='skill-card'>
                  <div className='mr-3'>
                     <img src={image3} alt="" className='w-44'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>Express Js</h2>
                     <p className='italic'>Express.js is a minimalistic and flexible web application framework for Node.js.</p>
                  </div>
               </div>

               <div className='skill-card'>
                  <div className='mr-3'>
                     <img src={image4} alt="" className='w-48'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>Firebase</h2>
                     <p className='italic'>Firebase is a comprehensive backend-as-a-service platform by Google that offers a suite services</p>
                  </div>
               </div>

               <div className='skill-card'>
                  <div className='mr-3'>
                     <img src={image5} alt="" className='w-48'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>CSS3</h2>
                     <p className='italic'>CSS is a styling language used to describe the presentation and visual appearance of HTML elements.</p>
                  </div>
               </div>

               <div className='skill-card'>
                  <div className='mr-3'>
                     <img src={image6} alt="" className='w-40'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>Node Js</h2>
                     <p className='italic'>Node.js is a runtime environment that allows server-side JavaScript execution.</p>
                  </div>
               </div>

               <div className='skill-card'>
                  <div className='mr-3'>
                     <img src={image7} alt="" className='w-48'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>MongoDB</h2>
                     <p className='italic'>MongoDB is a scalable and flexible NoSQL database that stores data in JSON.</p>
                  </div>
               </div>

               <div className='skill-card'>
                  <div className='mr-3'>
                     <img src={image8} alt="" className='w-44'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>React</h2>
                     <p className='italic'>React.js is a powerful JavaScript library for building user interfaces with component-based architecture.</p>
                  </div>
               </div>
               
               <div className='skill-card'>
                  <div className='mr-3'>
                     <img src={image9} alt="" className='w-48'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>Tailwind</h2>
                     <p className='italic'>Tailwind CSS is a utility-first CSS framework that provides a wide range of pre-built classes.</p>
                  </div>
               </div>

               <div className='skill-card'>
                  <div className='mr-3'>
                     <img src={image10} alt="" className='w-48'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>Git</h2>
                     <p className='italic'>Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.</p>
                  </div>
               </div>

               <div className='skill-card'>
                  <div className='mr-3'>
                     <img src={image11} alt="" className='w-48'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>Javascript</h2>
                     <p className='italic'>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much.</p>
                  </div>
               </div>

               <div className='skill-card'>
                  <div className='mr-3'>
                     <img src={image12} alt="" className='w-44'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>Canva</h2>
                     <p className='italic'>Canva is a user-friendly graphic design platform that enables users to create professional-looking designs.</p>
                  </div>
               </div>

               <div className='skill-card'>
                  <div className='mr-3'>
                     <img src={image13} alt="" className='w-44'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>Figma</h2>
                     <p className='italic'>Figma is a collaborative and cloud-based design tool that empowers teams to create.</p>
                  </div>
               </div>

               <div className='skill-card'>
                  <div className='mr-3'>
                     <img src={image14} alt="" className='w-48'/>
                  </div>

                  <div className='text-[#908F91] card-text'>
                     <h2 className='text-[20px] font-bold'>GitHub</h2>
                     <p className='italic'>GitHub is a for-profit company that offers a cloud-based Git repository hosting service. This is version control for individuals and teams.</p>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Skills;