import { FaDownload } from "react-icons/fa";
import Container from "../../Components/Container";
import image from "../../assets/image/ProtapGhosh-transparent-pass.png"
import CountUp from "react-countup";
import './AboutMe.css'

const AboutMe = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/u/1/uc?id=1xRWSXTv3n0YHHEz5875zBqxsWb_8Mlzx&export=download', '_parent');
  }

  return (
    <div className="bg-[#343A40] pt-10 pb-16" id="about-me">
      <Container>
        <div className="text-center about" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="about-title">About Me</h1>
          <h2 className="about-subTitle">Know Me More</h2>
          <hr />
        </div>

        <div className="md:flex items-center mt-5">
          <div className="md:w-1/2 mb-10" data-aos="zoom-in-up" data-aos-duration="1500">
            <img src={image} alt="Image" loading="lazy" className="border-2 border-[#20c99636] w-[350px] h-[380px] rounded-xl mx-auto shadow-lg shadow-[#20c996ab]" />
          </div>

          <div className="md:w-1/2" data-aos="fade-up" data-aos-duration="1500">
            <h2 className=" text-4xl text-white font-bold mb-8">I am <span className="text-[#20C997]">Available</span> for your Project</h2>
            <p className="text-[18px] font-semibold text-[#9A9DA0] mb-4">
              Hello! I&apos;m Protap Ghosh, from Satkhira, Bangladesh.
              I am dedicated to learning and mastering new technologies, and coding has become my true passion.
            </p>

            <p className="text-[18px] font-semibold text-[#9A9DA0]">
              I invest a significant amount of time in staying up-to-date with the latest trends and honing my skills. If you have an exciting project in mind, I&apos;m all ears! Feel free to explore my resume below to gain a better understanding of my skills and experience. Let&apos;s connect and bring your project to life together!
            </p>

            <div className="grid grid-cols-3 mt-8 mb-5 text-center">
              <div>
                <span className="text-[#909294] text-5xl font-bold">
                  <CountUp
                    start={0}
                    end={1}
                    duration={8}
                  />+
                </span>
                <p className="text-white text-xl">Years Experiance</p>
              </div>

              <div>
                <span className="text-[#909294] text-5xl font-bold">
                  <CountUp
                    end={23}
                    duration={5}
                  />+
                </span>
                <p className="text-white text-xl">Completed Projects</p>
              </div>

              <div>
                <span className="text-[#909294] text-5xl font-bold">
                  <CountUp
                    end={5}
                    duration={8}
                  />+
                </span>
                <p className="text-white text-xl">Happy Clients</p>
              </div>
            </div>

            <div className="flex justify-center" data-aos="zoom-in" data-aos-duration="1000">
              <button onClick={handleDownload} className='btn btn-outline border-[#6C757D] hover:border-[#6C757D] text-[16px] text-[#6C757D] capitalize border-2 rounded-full px-8 mt-5 hover:bg-[#6C757D]'>Download Resume <FaDownload /> </button>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;