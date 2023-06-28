import { useCallback } from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Container from '../../Components/Container';
import image from "../../assets/protap-ghosh.png"
import './Banner.css'
import { FaDownload } from 'react-icons/fa';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Banner = () => {
   const particlesInit = useCallback(async engine => {
      console.log(engine);
      await loadFull(engine);
   }, []);

   const particlesLoaded = useCallback(async container => {
      await console.log(container);
   }, []);

   const [text] = useTypewriter({
      words: ['MERN Stack Developer', 'Font-end Developer', 'Web Developer'],
      loop: {},
   });

   const handleDownload = () => {
      window.open('https://drive.google.com/u/1/uc?id=1Q7wzCfqI_aT_PwkPPqWC12cne-o9u_79&export=download', '_parent');
   }

   return (
      <div className='bg-[#212529] text-[#798792] min-h-screen pt-32'>
         <Container>
            <div className='banner' data-aos="fade-up" data-aos-duration="1500">
               <div className="banner-content">
                  <h1>Hello ! I&apos;m Protap Ghosh</h1>
                  <h2>
                     <span className='text-[#20C997]'>
                        {text}
                     </span>
                     <Cursor />
                  </h2>

                  <p className='lg:w-4/5 text-[18px] font-semibold'>
                     As a self-taught programmer, I have honed my skills in the MERN stack, demonstrating proficiency in JavaScript, HTML, and CSS. I possess a strong understanding of these technologies and strive to stay updated with the latest industry trends and advancements. My commitment to continuous learning allows me to adapt to evolving programming practices.
                  </p>

                  <button className='btn btn-outline border-[#20C997] hover:border-[#20C997] text-[16px] text-[#20C997] capitalize border-2 rounded-full px-8 mt-8 hover:bg-[#20C997]'>Hire Me</button>

                  <button onClick={handleDownload} className='btn border-none text-[16px] text-white capitalize border-2 rounded-full px-8 mt-8 ms-5 bg-[#20C997] hover:bg-[#1BAA80]'>Resume <FaDownload /></button>
               </div>

               <div className='banner-image' data-aos="fade-left" data-aos-duration="1500">
                  <div className='box'>
                     <div className='content'>
                        <img src={image} alt="Image" />
                        <div className='text'>
                           <h2 className='relative text-3xl font-bold uppercase'>Protap Ghosh <br />
                              <span className='text-base font-semibold'>MERN Stack Developer</span>
                           </h2>
                           <button className='btn btn-outline border-[#6C757D] hover:border-[#6C757D] text-[16px] text-[#6C757D] capitalize border-2 rounded-full px-8 mt-5 hover:bg-[#6C757D]'>Hire Me</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Container>

         <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
               background: {
                  color: {

                  },
               },
               fullScreen: {
                  enable: true,
                  zIndex: 1,
               },
               style: {
                  position: "absolute",
                  width: "100%",
                  height: "100%"
               },
               fpsLimit: 120,
               interactivity: {
                  events: {
                     onClick: {
                        enable: false,
                        mode: "push",
                     },
                     onHover: {
                        enable: true,
                        mode: "repulse",
                     },
                     resize: true,
                  },
                  modes: {
                     push: {
                        quantity: 4,
                     },
                     repulse: {
                        distance: 150,
                        duration: 0.4,
                     },
                  },
               },
               particles: {
                  color: {
                     value: "#00ccff",
                  },
                  links: {
                     color: "#20C997",
                     distance: 150,
                     enable: true,
                     opacity: 0.5,
                     width: 1,
                  },
                  collisions: {
                     enable: true,
                  },
                  move: {
                     direction: "none",
                     enable: true,
                     outModes: {
                        default: "bounce",
                     },
                     random: false,
                     speed: 3,
                     straight: false,
                  },
                  number: {
                     density: {
                        enable: true,
                        area: 800,
                     },
                     value: 80,
                  },
                  opacity: {
                     value: 0.5,
                  },
                  shape: {
                     type: "circle",
                  },
                  size: {
                     value: { min: 1, max: 5 },
                  },
               },
               detectRetina: true,
            }}
         />

      </div>
   );
};

export default Banner;