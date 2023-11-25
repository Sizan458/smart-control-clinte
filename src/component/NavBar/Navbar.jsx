import { Link, NavLink } from "react-router-dom";
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
import { DarkMode } from "../Hookes/Darkmode/DarkMode";
import { AuthContext } from "../Hookes/AuthProvider/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
  //call auth contex
  const {user,logOut}=useContext(AuthContext)
    //call dark mode hook
    const {changeTheme,mode} =DarkMode();
    const menu=<>
    <li><NavLink to='/' className='tab tab-active   bg-red-200  m-1'>Home</NavLink></li>
    <li><NavLink to='/apartments' className='tab tab-active    bg-red-200   m-1'>Apartments</NavLink></li>
        
    </>
     const handleLogOut = () => {
      logOut();
    };
    return (
        <div className="w-[99%] mx-auto   ">
        <div className="navbar  bg-rose-100   rounded-lg">
  <div className="flex-1">
   <NavLink to='/'><img src="https://i.ibb.co/VTQDYXJ/maxresdefault-removebg-preview.png" className="h-[80px]"/></NavLink>
  </div>
  <div className="flex-none">
   
  <div className="dropdown dropdown-hover">
  <label tabIndex={0} className="btn m-1">Menu</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    {menu}
  </ul>
</div>
    <div>
    <a className="btn text-2xl font-bold  btn-circle mr-3" onClick={()=>changeTheme()}>{mode === "dark"? <BsFillMoonFill/>:<BsFillSunFill/>}</a>
    </div>
    {/*dynamic logging btn */}
    <div>
    {
    user?<div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={user.photoURL} alt={user.displayName} />
      </div>
    </label>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    <li className="text-[40px] font-semibold"><p>{user.displayName}</p></li>
    <li><Link to='/dashboard'><button className="btn btn-error btn-sm m-1 w-full"  >Dashboard</button></Link></li>
    
    <li><button className="btn btn-error btn-sm m-1"  onClick={handleLogOut}>Logout</button></li>
    </ul>
  </div>:
  <Link to='/login'>
  <button className="btn glass">Login</button>
  </Link>
  }

    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;