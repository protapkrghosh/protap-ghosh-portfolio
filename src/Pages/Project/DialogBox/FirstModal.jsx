import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import image1 from "../../../assets/meetplanr/dashboard.png"
import image2 from "../../../assets/meetplanr/solution.png"
import image3 from "../../../assets/meetplanr/blog.png"
import image4 from "../../../assets/meetplanr/events.png"
import image5 from "../../../assets/meetplanr/invitee-info.png"
import image6 from "../../../assets/meetplanr/pricing.png"
import { HiOutlineLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const FirstModal = () => {
  return (
    <dialog id="meet_planr" className="modal modal-bottom sm:modal-middle">
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
          <h3 className="font-bold text-3xl text-white mt-5 font-[Poppins]">MeetPlanr</h3>
          <h3 className="text-xl font-semibold italic mt-4 ml-6">key Features</h3>
          <div className="mt-2 ml-6 space-y-1">
            <li>Provided three different types of Event Schedules and confirmed events by invitee.</li>
            <li>Sending confirmation and update event emails.</li>
            <li>Users can report if any function is not working on the website.</li>
            <li>Enabled user accounts can be shared and reviewed once this event is over.</li>
            <li>users can update and delete events by purchasing the Premium service.</li>
            <li>Here users can also read blogs if they want.</li>
          </div>

          <div>
            <h3 className="text-xl mt-5 my-2 font-semibold">Technologies</h3>
            <div className="text-[17px] space-x-5 font-[Poppins]">
              <span>react-hook-form</span>
              <span>Tailwind CSS</span>
              <span>Next Js</span>
              <span>Firebase</span>
              <span>Stripe Payment</span>
              <span>MongoDB</span>
              <span>Send Grid</span>
              <span>Jest</span>
              <span>Axios</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Vercel</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-5 my-2">Source Code</h3>
          <div className="flex items-center space-x-5 source-code text-2xl text-[#a1a8af]">
            <a href="https://github.com/gsjoy24/MeetPlanr" className="hover:text-[#20c997] tooltip tooltip-bottom" data-tip="View Code" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://meet-planr.vercel.app" className="hover:text-[#20c997] tooltip tooltip-bottom" data-tip="Live Site" target="_blank" rel="noreferrer"><HiOutlineLink /></a>
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