import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import image1 from "../../../assets/magical-toy/image1.png"
import image2 from "../../../assets/magical-toy/image2.png"
import image3 from "../../../assets/magical-toy/image3.png"
import image4 from "../../../assets/magical-toy/image4.png"
import image5 from "../../../assets/magical-toy/image5.png"
import image6 from "../../../assets/magical-toy/image6.png"
import image7 from "../../../assets/magical-toy/image7.png"
import { HiOutlineLink } from "react-icons/hi";
import { FaGithub, FaServer } from "react-icons/fa";

const SecondModal = () => {
   return (
      <dialog id="second_modal" className="modal modal-bottom sm:modal-middle">
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
                  <SwiperSlide><img src={image7} alt="" className="h-72 rounded-md" /></SwiperSlide>
               </Swiper>
            </div>

            <div className="text-[#c1d0db]">
               <h3 className="font-bold text-3xl text-white mt-5 font-[Poppins]">Magical Toy</h3>
               <h3 className="font-bold text-xl italic mt-4 ml-6">key Features</h3>
               <div className="mt-3 ml-6 space-y-1">
                  <li>Extensive Educational Toy Collection: Users can browse and explore a wide range of educational toys.</li>
                  <li>User Authentication: Users can register and log in to access additional features.</li>
                  <li>CRUD Operations: After logging in, users can add, remove, and update their toys using the Create, Read, Update, and Delete (CRUD) operations.</li>
                  <li>Toy Details: Users can view detailed information about each toy, including descriptions, images, and specifications.</li>
                  <li>Search Functionality: Users can search for specific toys based on keywords or categories.</li>
                  <li>Price Sorting: Users can sort the toys by price to find the ones that fit their budget.</li>
               </div>

               <h3 className="text-xl mt-5 my-2">Source Code</h3>
               <div className="flex items-center space-x-5 source-code text-2xl text-[#a1a8af]">
                  <a href="https://github.com/protap9ghosh/magical-toy-client" className="hover:text-[#20c997] tooltip tooltip-bottom" data-tip="Client Side" target="_blank" rel="noreferrer"><FaGithub /></a>
                  <a href="https://github.com/protap9ghosh/magical-toy-server" className="hover:text-[#20c997] tooltip tooltip-bottom" data-tip="Server Side" target="_blank" rel="noreferrer"><FaServer /></a>
                  <a href="https://magical-toy.web.app" className="hover:text-[#20c997] tooltip tooltip-bottom" data-tip="Live Site" target="_blank" rel="noreferrer"><HiOutlineLink /></a>
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

export default SecondModal;