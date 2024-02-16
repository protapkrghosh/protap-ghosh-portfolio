
const NavBar = () => {
  const navItems = <>
    <a href="#home" className='relative group'>
      Home
      <span className="absolute top-5 left-0 w-full h-[2px] bg-[#20c997] origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </a>
    <a href="#home" className='relative group'>
      Skills
      <span className="absolute top-5 left-0 w-full h-[2px] bg-[#20c997] origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </a>
    <a href="#project" className='relative group'>
      Project
      <span className="absolute top-5 left-0 w-full h-[2px] bg-[#20c997] origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </a>
    <a href="#about-me" className='relative group'>
      About
      <span className="absolute top-5 left-0 w-full h-[2px] bg-[#20c997] origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </a>
    <a href="#contact" className='relative group'>
      Contact
      <span className="absolute top-5 left-0 w-full h-[2px] bg-[#20c997] origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </a>
  </>

  return (
    <div className="navbar bg-[#070a1c6b] max-w-[2520px] mx-auto xl:px-16 md:px-10 sm:px-8 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h20" /></svg>
          </label>

          <ul tabIndex={0} className="menu menu-md dropdown-content mt-[14px] z-[1] space-y-4 shadow text-[#909da7] bg-[#343A40] rounded-md pl-3 pr-32 text-[15px] font-semibold uppercase border border-[#20c99652]">
            {navItems}
          </ul>
        </div>

        <a href='#home' className="normal-case font-[Poppins] text-3xl md:text-4xl font-bold">Protap Ghosh</a>
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