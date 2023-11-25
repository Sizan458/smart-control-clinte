import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Home from "../HomePage/Home/Home";
import Apartments from "../ApartmentsPage/Apartments/Apartments";
import Register from "../RegisterPage/Register/Register";
import Login from "../LoginPage/Login/Login";
import DashBoard from "../../UserDashboard/DashBoard/DashBoard";
import Profile from "../../UserDashboard/Profile/Profile";


const Router =  createBrowserRouter([
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Outlet/>
      </div>,
      children:[
        {
        path:"/",
        element:<Home/>
        },
        {
          path:"/apartments",
          element:<Apartments/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<div>
        <DashBoard/>
        <Outlet/>
      </div>,
      children:[
        {
          path:"/dashboard/profile",
          element:<Profile/>
        }
      ]
    }
])


export default Router;