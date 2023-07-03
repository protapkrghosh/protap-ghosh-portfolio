import './NavBar.css'

const NavBar = () => {
   const navItems = <>
      <a className='menu-link' href="#home">Home</a>
      <a className='menu-link' href="#skills">skills</a>
      <a className='menu-link' href="#project">project</a>
      <a className='menu-link' href="#about-me">About</a>
      <a className='menu-link' href="#contact">Contact</a>
   </>

   return (
      <div className="navbar bg-[#070a1c6b] max-w-[2520px] mx-auto xl:px-16 md:px-10 sm:px-8 px-4">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h20" /></svg>
               </label>

               <ul tabIndex={0} className="menu menu-md dropdown-content mt-[14px] z-[1] p-2 space-y-4 shadow text-[#909da7] bg-[#343A40] rounded-md w-[360px]">
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