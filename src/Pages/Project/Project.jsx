import { BsFillEyeFill } from "react-icons/bs";
import Container from "../../Components/Container"
import './Project.css'
import { FaGithub, FaServer } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";
import FirstModal from "./DialogBox/FirstModal";
import SecondModal from "./DialogBox/SecondModal";
import ThirdModal from "./DialogBox/ThirdModal";

const Project = () => {
   return (
      <div className="bg-[#343A40] pt-10 pb-16" id="project">
         <Container>
            <div className="text-center project" data-aos="fade-up" data-aos-duration="1000">
               <h1 className="project-title">Portfolio</h1>
               <h2 className="project-subTitle">My Work</h2>
               <hr />
            </div>

            <div className="project-card  pt-5">
               {/* Clever Cookie */}
               <div className="card bg-[#444b52] shadow-md rounded-md mx-auto" data-aos="zoom-in" data-aos-duration="1500">
                  <figure className="clever clever-cookie h-96"></figure>
                  <div className="card-body">
                     <h2 className="card-title text-2xl text-white font-[Poppins]">Clever Cookie</h2>
                     <p className="text-[#acbac5]">The website highlights top Bangladeshi chefs, providing their names, experiences, likes, and further details. All Chef and their short details are on a card and the All Recipe Page is a protected Page.</p>
                     <div className="card-actions justify-between items-center mt-5">
                        <div className="flex justify-center items-center space-x-5 w-1/3 source-code">
                           <a href="https://github.com/protap9ghosh/clever-cookie-client" className="text-xl text-[#a1a8af] hover:text-[#20c997] tooltip" data-tip="Client Side" target="_blank" rel="noreferrer"><FaGithub /></a>
                           <a href="https://github.com/protap9ghosh/clever-cookie-server" className="text-xl text-[#a1a8af] hover:text-[#20c997] tooltip" data-tip="Server Side" target="_blank" rel="noreferrer"><FaServer /></a>
                           <a href="https://clever-cookie-c7dd6.web.app" className="text-xl text-[#a1a8af] hover:text-[#20c997] tooltip" data-tip="Live Site" target="_blank" rel="noreferrer"><HiOutlineLink /></a>
                        </div>

                        <button onClick={() => window.clever_cookie.showModal()} className='btn btn-sm btn-outline border-[#9199a0] hover:border-[#9199a0] text-[16px] text-[#9199a0] capitalize border-2 rounded-full px-5 hover:bg-[#6C757D]'><BsFillEyeFill /> Details</button>
                        <FirstModal />
                     </div>
                  </div>
               </div>

               {/* Magical Toy */}
               <div className="card bg-[#444b52] shadow-md rounded-md mx-auto" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                  <figure className="magical magical-toy h-96"></figure>
                  <div className="card-body">
                     <h2 className="card-title text-2xl text-white font-[Poppins]">Magical Toy</h2>
                     <p className="text-[#acbac5]">This is a toy buying and selling website. A seller can list toys here and view his toy collection. And a user can see all the toys added by the seller.</p>
                     <div className="card-actions justify-between items-center mt-5">
                        <div className="flex justify-center items-center space-x-5 w-1/3 source-code">
                           <a href="https://github.com/protap9ghosh/magical-toy-client" className="text-xl text-[#a1a8af] hover:text-[#20c997] tooltip" data-tip="Client Side" target="_blank" rel="noreferrer"><FaGithub /></a>
                           <a href="https://github.com/protap9ghosh/magical-toy-server" className="text-xl text-[#a1a8af] hover:text-[#20c997] tooltip" data-tip="Server Side" target="_blank" rel="noreferrer"><FaServer /></a>
                           <a href="https://magical-toy.web.app" className="text-xl text-[#a1a8af] hover:text-[#20c997] tooltip" data-tip="Live Site" target="_blank" rel="noreferrer"><HiOutlineLink /></a>
                        </div>


                        <button onClick={() => window.second_modal.showModal()} className='btn btn-sm btn-outline border-[#9199a0] hover:border-[#9199a0] text-[16px] text-[#9199a0] capitalize border-2 rounded-full px-5 hover:bg-[#6C757D]'><BsFillEyeFill /> Details</button>
                        <SecondModal />
                     </div>
                  </div>
               </div>

               {/* Skill Up Camp */}
               <div className="card bg-[#444b52] shadow-md rounded-md mx-auto" data-aos="zoom-in-up" data-aos-duration="1500">
                  <figure className="skill-up skill-up-camp h-96"></figure>
                  <div className="card-body">
                     <h2 className="card-title text-2xl text-white font-[Poppins]">Skill Up Camp</h2>
                     <p className="text-[#acbac5]">This a basically an online course platform for summer vacation students. This full site creates with the MERN stack. There are some admin roles. If any user registers on our site by default their role was a student.</p>
                     <div className="card-actions justify-between items-center mt-5">
                        <div className="flex justify-center items-center space-x-5 w-1/3 source-code">
                           <a href="https://github.com/protap9ghosh/skill-up-camp-client" className="text-xl text-[#a1a8af] hover:text-[#20c997] tooltip" data-tip="Client Side" target="_blank" rel="noreferrer"><FaGithub /></a>
                           <a href="https://github.com/protap9ghosh/skill-up-camp-server" className="text-xl text-[#a1a8af] hover:text-[#20c997] tooltip" data-tip="Server Side" target="_blank" rel="noreferrer"><FaServer /></a>
                           <a href="https://skill-up-camp.web.app" className="text-xl text-[#a1a8af] hover:text-[#20c997] tooltip" data-tip="Live Site" target="_blank" rel="noreferrer"><HiOutlineLink /></a>
                        </div>


                        <button onClick={() => window.third_modal.showModal()} className='btn btn-sm btn-outline border-[#9199a0] hover:border-[#9199a0] text-[16px] text-[#9199a0] capitalize border-2 rounded-full px-5 hover:bg-[#6C757D]'><BsFillEyeFill /> Details</button>
                        <ThirdModal />
                     </div>
                  </div>
               </div>

            </div>
         </Container>
      </div>
   )
};

export default Project;