import { BsFillEyeFill } from "react-icons/bs";
import Container from "../../Components/Container"
import './Project.css'
import Modal from "./DialogBox/CleverCookie/CleverCookieModal";
import { FaGithub, FaServer } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";

const Project = () => {
   return (
      <div className="bg-[#343A40] pt-10 pb-16" id="project">
         <Container>
            <div className="text-center project" data-aos="fade-up" data-aos-duration="1000">
               <h1 className="project-title">Portfolio</h1>
               <h2 className="project-subTitle">My Work</h2>
               <hr />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

               <div className="card w-96 bg-[#444b52] shadow-md rounded-md">
                  <figure className="image image1 w-96 h-96"></figure>

                  <div className="card-body">
                     <h2 className="card-title text-2xl text-white font-[Poppins]">Clever Cookie</h2>
                     <p className="text-[#acbac5]">The website highlights top American chefs, providing their names, experiences, likes, and further details.</p>
                     <div className="card-actions justify-between items-center mt-5">
                        <div className="flex justify-center items-center space-x-5 w-1/3 source-code">
                           <a href="https://github.com/protap9ghosh/clever-cookie-client" className="text-xl text-[#a1a8af] hover:text-[#20c997] tooltip" data-tip="Client Side"><FaGithub /></a>
                           <a href="https://github.com/protap9ghosh/clever-cookie-server" className="text-xl text-[#a1a8af] hover:text-[#20c997] tooltip" data-tip="Server Side"><FaServer /></a>
                           <a href="https://clever-cookie-c7dd6.web.app" className="text-xl text-[#a1a8af] hover:text-[#20c997] tooltip" data-tip="Live Site"><HiOutlineLink /></a>
                        </div>

                        {/* Open the modal using ID.showModal() method */}
                        <button onClick={() => window.my_modal_5.showModal()} className='btn btn-sm btn-outline border-[#9199a0] hover:border-[#9199a0] text-[16px] text-[#9199a0] capitalize border-2 rounded-full px-5 hover:bg-[#6C757D]'><BsFillEyeFill/> Details</button>
                        <Modal/>

                     </div>
                  </div>
               </div>

            </div>
         </Container>
      </div>
   )
};

export default Project;