import { Link } from 'react-scroll';
import { FaSquare } from "react-icons/fa";
import logo from "../../assets/image/logo.png"
import { useState } from 'react';

const NavBar = () => {
  const [color, setColor] = useState(false);

  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window?.scrollY >= 50) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }

  const navItems = <>
    <Link to="home" className='relative group cursor-pointer' smooth={true} offset={-130} duration={700}>
      Home
      <span className="absolute top-5 left-0 w-full h-[2px] bg-[#20c997] origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </Link>

    <Link to="skills" className='relative group cursor-pointer' smooth={true} offset={0} duration={700}>
      Skills
      <span className="absolute top-5 left-0 w-full h-[2px] bg-[#20c997] origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </Link>

    <Link to="project" className='relative group cursor-pointer' smooth={true} offset={0} duration={700}>
      Project
      <span className="absolute top-5 left-0 w-full h-[2px] bg-[#20c997] origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </Link>

    <Link to="aboutMe" className='relative group cursor-pointer' smooth={true} offset={0} duration={700}>
      About
      <span className="absolute top-5 left-0 w-full h-[2px] bg-[#20c997] origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </Link>

    <Link to="contact" className='relative group cursor-pointer' smooth={true} offset={0} duration={700}>
      Contact
      <span className="absolute top-5 left-0 w-full h-[2px] bg-[#20c997] origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </Link>
  </>

  return (
    <div className={`navbar max-w-[2520px] mx-auto xl:px-14 md:px-10 sm:px-8 px-4 ${color ? 'bg-[#070a1ce0]' : "bg-[#070a1c5b]"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h20" /></svg>
          </label>

          <ul tabIndex={0} className="menu menu-md dropdown-content mt-[14px] z-[1] space-y-4 shadow text-[#909da7] bg-[#343A40] rounded-md pl-3 pr-32 text-[15px] font-semibold uppercase border border-[#20c99652]">
            {navItems}
          </ul>
        </div>

        {/* <a href='#home' className="font-bold uppercase flex items-end relative">
          <span className='text-3xl md:text-[42px]'>P</span>
          <FaSquare className='text-[8px] absolute right-0'/>
        </a> */}

        <Link to="home" smooth={true} offset={0} duration={700}>
          <img src={logo} alt="Image" className='w-[60px] cursor-pointer' />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6 text-[15px] font-semibold uppercase">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;