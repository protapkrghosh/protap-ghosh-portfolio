import { Link } from 'react-scroll'
import './NavBar.css'

const NavBar = () => {
   const navItems = <>
      <a className='menu-link' href="#home">Home</a>
      <a className='menu-link' href="#skills">skills</a>
      <a className='menu-link' href="#project">project</a>
      <a className='menu-link' href="#about-me">About</a>
      <a className='menu-link' href="#contact">Contact</a>

      {/* <Link to='banner' className='menu-link active' spy={true} smooth={true} offset={-90} duration={500}>Home</Link>
      <Link to='skill' className='menu-link' spy={true} smooth={true} offset={-141} duration={500}>Skills</Link>
      <Link to='project' className='menu-link' spy={true} smooth={true} offset={-90} duration={500}>Project</Link>
      <Link to='about' className='menu-link' spy={true} smooth={true} offset={-40} duration={500}>About</Link>
      <Link to='contact' className='menu-link' spy={true} smooth={true} offset={-90} duration={500}>Contact Me</Link> */}
   </>

   return (
      <div className="navbar bg-[#070a1c6b] max-w-[2520px] mx-auto xl:px-16 md:px-10 sm:px-8 px-4">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>

               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navItems}
               </ul>
            </div>

            <a href='#home' className="normal-case font-[Poppins] text-4xl font-bold">Protap Ghosh</a>
         </div>

         <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {navItems}
            </ul>
         </div>
      </div>
   );
};

export default NavBar;