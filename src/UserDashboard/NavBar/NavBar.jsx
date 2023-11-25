import { NavLink } from "react-router-dom";
import { DarkMode } from "../../component/Hookes/Darkmode/DarkMode";
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";


const NavBar = () => {

    const {changeTheme,mode} =DarkMode();
    const menu=<>
    <li><NavLink to='/dashboard/profile' className='tab tab-active   bg-red-200  m-1'>My Profile</NavLink></li>
    <li><NavLink to='/announcement' className='tab tab-active    bg-red-200   m-1'>Announcement</NavLink></li>
        
    </>
    return (
        <div className="w-[99%] mx-auto   ">
            <div className="navbar bg-base-100 rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {menu}
      </ul>
    </div>
    <NavLink to='/'><img src="https://i.ibb.co/VTQDYXJ/maxresdefault-removebg-preview.png" className="h-[80px]"/></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menu}
    </ul>
  </div>
  <div className="navbar-end">
  <a className="btn text-2xl font-bold  btn-circle mr-3" onClick={()=>changeTheme()}>{mode === "dark"? <BsFillMoonFill/>:<BsFillSunFill/>}</a>
  </div>
 
</div>
        </div>
    );
};

export default NavBar;