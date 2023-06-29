import Container from "../../Components/Container";
import './Contact.css'

const Contact = () => {
   return (
      <div className='bg-[#212529] pt-10 pb-16'>
         <Container>
            <div className="text-center contact" data-aos="fade-up" data-aos-duration="1000">
               <h1 className="contact-title">Contact</h1>
               <h2 className="contact-subTitle">Get in Touch</h2>
               <hr />
            </div>


         </Container>
      </div>
   );
};

export default Contact;