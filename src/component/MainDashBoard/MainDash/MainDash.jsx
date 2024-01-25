import { useContext } from "react";
import { DarkMode } from "../../Hookes/Darkmode/DarkMode";
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
import { AuthContext } from "../../Hookes/AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";


const MainDash = () => {
    const {changeTheme,mode} =DarkMode();
    const {logOut}=useContext(AuthContext)
    const handleLogOut = () => {
      logOut();
    };
 const isAdmin = true
 const link1=<>
 <li><NavLink>My Profile</NavLink></li> 
         <li><NavLink to="/dashboard2/payment">Make payment</NavLink></li> 
         <li><NavLink>Payment History</NavLink></li> 
         
         <li><NavLink>Announcements</NavLink></li> 
         
 </>
 const link2 =<>
  <li><NavLink>Admin Profile</NavLink></li> 
  <li><NavLink to="/dashboard2/menageMember">Manage Members</NavLink></li> 
  <li><NavLink>Agreement Requests</NavLink></li> 
  <li><NavLink>Manage Coupons</NavLink></li> 
 </>
    return (
        <div>
            <div className="navbar bg-base-300 rounded-box">
  <div className="flex-1 px-2 lg:flex-none">
  <NavLink to='/'><img src="https://i.ibb.co/VTQDYXJ/maxresdefault-removebg-preview.png" className="h-[80px]"/></NavLink>
  </div> 
  <div className="flex justify-end flex-1 px-2">
    <div className="flex items-stretch">
    <div>
    <a className="btn text-2xl font-bold  btn-circle mr-3" onClick={()=>changeTheme()}>{mode === "dark"? <BsFillMoonFill/>:<BsFillSunFill/>}</a>
    </div>
    <button className="btn btn-error m-1"  onClick={handleLogOut}>Logout</button>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Dropdown</div>
        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
        {
        isAdmin?link2:link1
      }
        </ul>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default MainDash;