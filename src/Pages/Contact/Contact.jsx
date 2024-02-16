import { BsFillTelephoneFill, BsFacebook, BsWhatsapp, BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import Container from "../../Components/Container";
import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vmaqmbb', 'template_t6cr9hq', form.current, 'IpvOMSn9dt5ZiyEbH')
      .then((result) => {
        // console.log(result.text);
        toast.success("Sending your message successful");
        form.current.reset();
      }, (error) => {
        // console.log(error.text);
        toast.error("Something wrong, please try again")
        form.current.reset();
      });
  };

  return (
    <div className='bg-[#212529] pt-10 pb-16' id="contact">
      <Container>
        <Toaster />
        <div className="text-center contact" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="contact-title">Contact</h1>
          <h2 className="contact-subTitle">Get in Touch</h2>
          <hr />
        </div>

        <div className="pt-5 contact-form">
          <div className='address'>
            <div>
              <p className="text-2xl text-[#D3E3E4] font-semibold uppercase mb-6">Address</p>

              <div className="text-lg flex items-center mb-2" data-aos="fade-up" data-aos-duration="900">
                <p className='icon mr-3 text-2xl text-[#20c997]'><AiOutlineMail /></p>
                <a href='https://mail.google.com' target='_blank' rel='noreferrer' className='email-address text-[#D3E3E4]'>protapg518@gmail.com</a>
              </div>

              <div className="text-lg flex items-center mb-2" data-aos="fade-up" data-aos-duration="1300">
                <p className='icon mr-3 text-2xl text-[#20c997]'><BsFillTelephoneFill /></p>
                <div>
                  <p className='text-[#D3E3E4]'>+880 1790287567</p>
                  <p className='text-[#D3E3E4]'>+880 1518944862</p>
                </div>
              </div>

              <div className="text-lg flex items-center" data-aos="fade-up" data-aos-duration="1500">
                <p className='icon mr-3 text-2xl text-[#20c997]'><MdLocationPin /></p>
                <p className='text-[#D3E3E4]'>Khulna, Bangladesh</p>
              </div>
            </div>

            <h3 className='text-2xl text-[#D3E3E4] font-semibold mt-10'>Keep in touch</h3>
            <div className="social-link text-white">
              <a href="https://www.facebook.com/protapkrghosh" className='tooltip tooltip-top' data-tip="Facebook" target="_blank" rel="noreferrer" data-aos="fade-up" data-aos-duration="900"><BsFacebook /></a>

              <a href="https://www.twitter.com/protapkrghosh" className='tooltip tooltip-top' data-tip="Twitter" target="_blank" rel="noreferrer" data-aos="fade-up" data-aos-duration="1100"><BsTwitter /></a>

              <a href="https://wa.me/1790287567" className='tooltip tooltip-top' data-tip="Whatsapp" target="_blank" rel="noreferrer" data-aos="fade-up" data-aos-duration="1300"><BsWhatsapp /></a>

              <a href="https://www.linkedin.com/in/protapghosh" className='tooltip tooltip-top' data-tip="Linkedin" target="_blank" rel="noreferrer" data-aos="fade-up" data-aos-duration="1500"><BsLinkedin /></a>

              <a href="https://www.github.com/protapkrghosh" className='tooltip tooltip-top' data-tip="GitHub" target="_blank" rel="noreferrer" data-aos="fade-up" data-aos-duration="1800"><BsGithub /></a>
            </div>
          </div>

          <div className="message-field w-full">
            <h2 className="text-2xl text-[#D3E3E4] font-semibold uppercase">Write me a message</h2>

            <form ref={form} onSubmit={sendEmail}>
              <div className="input-field mt-8" data-aos="fade-up" data-aos-duration="800">
                <div className="form-control">
                  <input type="text" name="user_name" placeholder="Michael David" className="input rounded-md text-[#a7adb3] bg-[#3A4046] focus:border-[#20c99696]" required />
                </div>

                <div className="form-control">
                  <input type="email" name="user_email" placeholder="example@gmail.com" className="input rounded-md text-[#a7adb3] bg-[#3A4046] focus:border-[#20c99696]" required />
                </div>
              </div>

              <div className="form-control my-7" data-aos="fade-up" data-aos-duration="1000">
                <input type="text" name="subject" placeholder="Subject" className="input rounded-md text-[#a7adb3] bg-[#3A4046] focus:border-[#20c99696]" required />
              </div>

              <div className="form-control" data-aos="fade-up" data-aos-duration="1300">
                <textarea name="message" className="textarea rounded-md h-40 text-[17px] text-[#a7adb3] bg-[#3A4046] focus:border-[#20c99696]" placeholder="Write your message" required></textarea>
              </div>

              <div className="send-btn" data-aos="fade-up" data-aos-duration="1300">
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