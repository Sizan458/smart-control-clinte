import { NavLink } from "react-router-dom";
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
import { DarkMode } from "../Hookes/Darkmode/DarkMode";
const Navbar = () => {
    //call dark mode hook
    const {changeTheme,mode} =DarkMode();
    const menu=<>
    <li><NavLink to='/' className='tab tab-active  bg-red-200 font-bold text-lg'>Home</NavLink></li>
    <li><NavLink to='/' className='tab tab-active  bg-red-200 font-bold text-lg'>Home</NavLink></li>
        
    </>
    return (
        <div className="w-[99%] mx-auto  ">
        <div className="navbar  bg-rose-100 bg-fixed z-10   rounded-lg">
  <div className="flex-1">
   <NavLink to='/'><img src="https://i.ibb.co/VTQDYXJ/maxresdefault-removebg-preview.png" className="h-[80px]"/></NavLink>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      
      <li>
        <details>
          <summary className="font-bold text-lg m-1">
            Menu
          </summary>
          <ul className="p-2 bg-base-100">
            {menu}
          </ul>
        </details>
      </li>
    </ul>
    <div>
    <a className="btn text-2xl font-bold  btn-circle mr-3" onClick={()=>changeTheme()}>{mode === "dark"? <BsFillMoonFill/>:<BsFillSunFill/>}</a>
    </div>
    <div>
    <button className="btn btn-info m-1">Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;