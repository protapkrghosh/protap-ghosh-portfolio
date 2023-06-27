import { FaDownload } from "react-icons/fa";
import Container from "../../Components/Container";
import image from "../../assets/protap.png"

const AboutMe = () => {
   const handleDownload = () => {
      window.open('https://drive.google.com/u/1/uc?id=1Q7wzCfqI_aT_PwkPPqWC12cne-o9u_79&export=download', '_parent');
   }

   return (
      <div className="bg-[#343A40] pt-10 pb-16">
         <Container>
            <div className="text-center about">
               <h1 className="title">About Me</h1>
               <h2 className="sub-title">Know Me More</h2>
               <hr />
            </div>

            <div className="md:flex items-center mt-10">
               <div className="md:w-1/2">
                  <img src={image} alt="Image" className="border border-[#20C997] w-[300px] h-auto rounded-xl mx-auto shadow-lg shadow-[#20C997]"/>
               </div>

               <div className="md:w-1/2">
                  <h2 className=" text-4xl text-white font-bold mb-8">I am <span className="text-[#20C997]">available</span> for your Project</h2>
                  <p className="text-[18px] font-semibold text-[#9A9DA0] mb-4">
                     Hello! I&apos;m Protap Ghosh, from Satkhira, Bangladesh.
                     I am dedicated to learning and mastering new technologies, and coding has become my true passion.
                  </p>

                  <p className="text-[18px] font-semibold text-[#9A9DA0]">
                     I invest a significant amount of time in staying up-to-date with the latest trends and honing my skills. If you have an exciting project in mind, I&apos;m all ears! Feel free to explore my resume below to gain a better understanding of my skills and experience. Let&apos;s connect and bring your project to life together!
                  </p>

                  <div className="flex justify-center">
                     <button onClick={handleDownload} className='btn btn-outline border-[#6C757D] hover:border-[#6C757D] text-[16px] text-[#6C757D] capitalize border-2 rounded-full px-8 mt-5 hover:bg-[#6C757D]'>Download Resume <FaDownload /> </button>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default AboutMe;