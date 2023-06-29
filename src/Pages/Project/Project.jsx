import Container from "../../Components/Container"
import './Project.css'

const Project = () => {
   return (
      <div className="bg-[#343A40] pt-10 pb-16">
         <Container>
            <div className="text-center project" data-aos="fade-up" data-aos-duration="1000">
               <h1 className="project-title">Portfolio</h1>
               <h2 className="project-subTitle">My Work</h2>
               <hr />
            </div>

            
         </Container>
      </div>
   )
};

export default Project;