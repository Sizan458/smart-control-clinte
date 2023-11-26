import { NavLink } from "react-router-dom";

const DashBoard2 = () => {
    const admin = true

     const menu1=<>
         <li className="m-1"><NavLink>Admin Profile</NavLink></li>
         <li className="m-1"><NavLink to='/dashboard2/member'>Manage Members</NavLink></li>
         <li className="m-1"><NavLink to='/dashboard2/announcements'>Make Announcement</NavLink></li>
         <li className="m-1"><NavLink>Agreement Requests</NavLink></li>
         <li className="m-1"><NavLink>Manage Coupons</NavLink></li>
    </>

    const menu2 =<>
     <li className="m-1"><NavLink>My Profile</NavLink></li>
     <li className="m-1"><NavLink>Make payment</NavLink></li>
     <li className="m-1"><NavLink>Payment History</NavLink></li>
     <li className="m-1"><NavLink>Announcements</NavLink></li>
    </>
    return (
        <div>
            <div>
            <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
         {
            admin?menu1:menu2
         }
        </ul>
      </div>
    </div>
    {/* Page content here */}
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      {
            admin?menu1:menu2
         }
    </ul>
  </div>
</div>
            </div>
        </div>
    );
};

export default DashBoard2;