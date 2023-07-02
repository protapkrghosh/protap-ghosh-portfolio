import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import image1 from "../../../assets/skill-up/image1.png"
import image2 from "../../../assets/skill-up/image2.png"
import image3 from "../../../assets/skill-up/image3.png"
import image4 from "../../../assets/skill-up/image4.png"
import image5 from "../../../assets/skill-up/image5.png"
import image6 from "../../../assets/skill-up/image6.png"
import image7 from "../../../assets/skill-up/image7.png"
import { HiOutlineLink } from "react-icons/hi";
import { FaGithub, FaServer } from "react-icons/fa";

const ThirdModal = () => {
   return (
      <dialog id="third_modal" className="modal modal-bottom sm:modal-middle">
         <form method="dialog" className="modal-box bg-[#414a52] p-5">
            <div>
               <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                     delay: 2500,
                     disableOnInteraction: false,
                  }}
                  pagination={{
                     clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
               >
                  <SwiperSlide><img src={image1} alt="" className="h-72 rounded-md"/></SwiperSlide>
                  <SwiperSlide><img src={image2} alt="" className="h-72 rounded-md"/></SwiperSlide>
                  <SwiperSlide><img src={image3} alt="" className="h-72 rounded-md"/></SwiperSlide>
                  <SwiperSlide><img src={image4} alt="" className="h-72 rounded-md"/></SwiperSlide>
                  <SwiperSlide><img src={image5} alt="" className="h-72 rounded-md"/></SwiperSlide>
                  <SwiperSlide><img src={image6} alt="" className="h-72 rounded-md"/></SwiperSlide>
                  <SwiperSlide><img src={image7} alt="" className="h-72 rounded-md"/></SwiperSlide>
               </Swiper>
            </div>

            <div className="text-[#c1d0db]">
               <h3 className="font-bold text-3xl text-white mt-5 font-[Poppins]">Skill Up Camp</h3>
               <h3 className="text-xl font-semibold italic mt-4 ml-6">key Features</h3>
               <div className="mt-2 ml-6 space-y-1">
                  <li>It is an educational website, from here various courses can be taken.</li>
                  <li>Login is required for any class details and payment.</li>
                  <li>If an instructor wants to take classes, he must open an account.</li>
                  <li>An admin can revoke the permission of a class in instructor.</li>
                  <li>If a class has no vacant seats then that class cannot be purchased anymore, the button will be disabled.</li>
                  <li>Before enrolling in a class you must log in and pay. otherwise, the student will not be able to attend the class.</li>
               </div>

               <div>
                  <h3 className="text-xl mt-5 my-2 font-semibold">Technologies</h3>
                  <div className="text-[17px] space-x-5 font-[Poppins]">
                     <span>HTML5</span>
                     <span>CSS3</span>
                     <span>Vercel</span>
                     <span>React Js</span>
                     <span>Firebase</span>
                     <span>Tailwind CSS</span>
                     <span>Daisy UI</span>
                     <span>react-helmet-async</span>
                     <span>MongoDB</span>
                     <span>Express Js</span>
                     <span>Node Js</span>
                     <span>React router</span>
                     <span>JWT</span>
                     <span>Axios</span>
                     <span>AOS Animation</span>
                     <span>Sweetalert2</span>
                     <span>React query</span>
                     <span>swiper</span>
                     <span>react-hook-form</span>
                     <span>toastify</span>
                  </div>
               </div>
               
               <h3 className="text-xl mt-5 my-2">Source Code</h3>
               <div className="flex items-center space-x-5 source-code text-2xl text-[#a1a8af]">
                  <a href="https://github.com/protap9ghosh/skill-up-camp-client" className="hover:text-[#20c997] tooltip tooltip-bottom" data-tip="Client Side" target="_blank" rel="noreferrer"><FaGithub /></a>
                  <a href="https://github.com/protap9ghosh/skill-up-camp-server" className="hover:text-[#20c997] tooltip tooltip-bottom" data-tip="Server Side" target="_blank" rel="noreferrer"><FaServer /></a>
                  <a href="https://skill-up-camp.web.app" className="hover:text-[#20c997] tooltip tooltip-bottom" data-tip="Live Site" target="_blank" rel="noreferrer"><HiOutlineLink /></a>
               </div>
            </div>

            <div className="modal-action">
               {/* if there is a button in form, it will close the modal */}
               <button className='btn btn-sm btn-outline border-[#20C997] hover:border-[#20C997] text-[16px] text-[#20C997] capitalize border-2 rounded-full px-5 hover:bg-[#20C997]'>Close</button>
            </div>
         </form>
      </dialog>
   );
};

export default ThirdModal;