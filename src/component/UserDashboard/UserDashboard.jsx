import { NavLink } from "react-router-dom";
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
import { DarkMode } from "../Hookes/Darkmode/DarkMode";
import { useContext } from "react";
import { AuthContext } from "../Hookes/AuthProvider/AuthProvider";

const UserDashboard = () => {
 //call dark mode hook
    const {changeTheme,mode} =DarkMode();

    const {logOut}=useContext(AuthContext)
    const handleLogOut = () => {
      logOut();
    };
  const link=<>
<li><NavLink to="/dashboard/profile">Profile</NavLink></li>
      <li><NavLink to="/dashboard/announcement">Announcement
</NavLink></li>
  </>
    return (
        <div>
         <div className="navbar bg-base-300 rounded-box">
  <div className="flex-1 px-2 lg:flex-none">
  <NavLink to='/'><img src="https://i.ibb.co/VTQDYXJ/maxresdefault-removebg-preview.png" className="h-[80px]"/></NavLink>
  </div> 
  <div className="flex justify-end flex-1 px-2">
    <div className="flex items-stretch">
      <button className="btn btn-error m-1"  onClick={handleLogOut}>Logout</button>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Menu</div>
        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
         {link}
        </ul>
      </div>
      <div>
    <a className="btn text-2xl font-bold  btn-circle mr-3" onClick={()=>changeTheme()}>{mode === "dark"? <BsFillMoonFill/>:<BsFillSunFill/>}</a>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default UserDashboard;