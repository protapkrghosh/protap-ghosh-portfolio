import { BsFillTelephoneFill, BsSend, BsFacebook, BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import Container from "../../Components/Container";
import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_b1hnbpd', 'template_g16mjxp', form.current, 'nj9k-mWuTTMyvDuKy')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });
   };

   return (
      <div className='bg-[#212529] pt-10 pb-16' id="contact">
         <Container>
            <div className="text-center contact" data-aos="fade-up" data-aos-duration="1000">
               <h1 className="contact-title">Contact</h1>
               <h2 className="contact-subTitle">Get in Touch</h2>
               <hr />
            </div>

            <div className="pt-5 contact-form">
               <div className='address' data-aos="fade-right" data-aos-duration="1500">
                  <div>
                     <p className="text-2xl text-[#D3E3E4] font-semibold uppercase mb-6">Address</p>

                     <div className="text-lg flex items-center mb-2">
                        <p className='mr-3 text-2xl text-[#20c997]'><AiOutlineMail /></p>
                        <a href='https://mail.google.com' className='email-address text-[#D3E3E4]'>protapg518@gmail.com</a>
                     </div>

                     <div className="text-lg flex items-center mb-2">
                        <p className='mr-3 text-2xl text-[#20c997]'><BsFillTelephoneFill /></p>
                        <div>
                           <p className='text-[#D3E3E4]'>+880 1790287567</p>
                           <p className='text-[#D3E3E4]'>+880 1518944862</p>
                        </div>
                     </div>

                     <div className="text-lg flex items-center ">
                        <p className='mr-3 text-3xl text-[#20c997]'><MdLocationPin /></p>
                        <p className='text-[#D3E3E4]'>Satkhira, Bangladesh</p>
                     </div>
                  </div>

                  <h3 className='text-2xl text-[#D3E3E4] font-semibold mt-10'>Keep in touch</h3>
                  <div className="social-link text-white">
                     <a href="https://www.facebook.com/Protap9Ghosh" className='tooltip tooltip-top' data-tip="Facebook"><BsFacebook /></a>
                     <a href="" className='tooltip tooltip-top' data-tip="Whatsapp"><BsWhatsapp /></a>
                     <a href="" className='tooltip tooltip-top' data-tip="Linkedin"><BsLinkedin /></a>
                     <a href="https://www.github.com/Protap9Ghosh" className='tooltip tooltip-top' data-tip="GitHub"><BsGithub /></a>
                  </div>
               </div>

               <div className="message-field w-full" data-aos="zoom-in" data-aos-duration="1500">
                  <h2 className="text-2xl text-[#D3E3E4] font-semibold uppercase">Write me a message</h2>

                  <form ref={form} onSubmit={sendEmail}>
                     <div className="input-field mt-8 mb-7">
                        <div className="form-control">
                           <input type="text" name="user_name" placeholder="Name" className="input rounded-md text-[#a7adb3] bg-[#3A4046] focus:border-[#20c997]"  required/>
                        </div>

                        <div className="form-control">
                           <input type="email" name="user_email" placeholder="Email" className="input rounded-md text-[#a7adb3] bg-[#3A4046] focus:border-[#20c997]"  required/>
                        </div>
                     </div>

                     <div className="form-control">
                        <textarea name="message" className="textarea rounded-md h-44 text-[17px] text-[#a7adb3] bg-[#3A4046] focus:border-[#20c997]" placeholder="Tell me more about your needs" required></textarea>
                     </div>

                     <div className="send-btn">
                        <input type="submit" value="Send Message" className='btn border-none text-[16px] text-white capitalize border-2 rounded-full px-8 mt-8 ms-5 bg-[#20C997] hover:bg-[#1BAA80]' />
                     </div>
                  </form>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Contact;