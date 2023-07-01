import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import image1 from "../../../assets/clever-cookie/image1.png"
import image2 from "../../../assets/clever-cookie/image2.png"
import image3 from "../../../assets/clever-cookie/image3.png"
import image4 from "../../../assets/clever-cookie/image4.png"
import image5 from "../../../assets/clever-cookie/image5.png"
import image6 from "../../../assets/clever-cookie/image6.png"
import { HiOutlineLink } from "react-icons/hi";
import { FaGithub, FaServer } from "react-icons/fa";

const FirstModal = () => {
   return (
      <dialog id="clever_cookie" className="modal modal-bottom sm:modal-middle">
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
                  <SwiperSlide><img src={image1} alt="" className="h-72 rounded-md" /></SwiperSlide>
                  <SwiperSlide><img src={image2} alt="" className="h-72 rounded-md" /></SwiperSlide>
                  <SwiperSlide><img src={image3} alt="" className="h-72 rounded-md" /></SwiperSlide>
                  <SwiperSlide><img src={image4} alt="" className="h-72 rounded-md" /></SwiperSlide>
                  <SwiperSlide><img src={image5} alt="" className="h-72 rounded-md" /></SwiperSlide>
                  <SwiperSlide><img src={image6} alt="" className="h-72 rounded-md" /></SwiperSlide>
               </Swiper>
            </div>

            <div className="text-[#c1d0db]">
               <h3 className="font-bold text-3xl text-white mt-5 font-[Poppins]">Clever Cookie</h3>
               <h3 className="font-bold text-xl italic mt-4 ml-6">key Features</h3>
               <div className="mt-3 ml-6 space-y-1">
                  <li>It is a cooking and food-related website.</li>
                  <li>This site uses a login system.</li>
                  <li>Favorite food can not be added without login.</li>
                  <li>If you like the food of any recipe, you can tell about that recipe by clicking the view recipe button.</li>
                  <li>If the user is logged in, he can view the safe and recipe details.</li>
                  <li>If the user is logged in, his name can be seen in the navbar with his picture and tooltip.</li>
               </div>

               <h3 className="text-xl mt-5 my-2">Source Code</h3>
               <div className="flex items-center space-x-5 source-code text-2xl text-[#a1a8af]">
                  <a href="https://github.com/protap9ghosh/clever-cookie-client" className="hover:text-[#20c997] tooltip tooltip-bottom" data-tip="Client Side" target="_blank" rel="noreferrer"><FaGithub /></a>
                  <a href="https://github.com/protap9ghosh/clever-cookie-server" className="hover:text-[#20c997] tooltip tooltip-bottom" data-tip="Server Side" target="_blank" rel="noreferrer"><FaServer /></a>
                  <a href="https://clever-cookie-c7dd6.web.app" className="hover:text-[#20c997] tooltip tooltip-bottom" data-tip="Live Site" target="_blank" rel="noreferrer"><HiOutlineLink /></a>
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

export default FirstModal;