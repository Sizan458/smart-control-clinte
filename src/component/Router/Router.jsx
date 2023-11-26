import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Home from "../HomePage/Home/Home";
import Apartments from "../ApartmentsPage/Apartments/Apartments";
import Register from "../RegisterPage/Register/Register";
import Login from "../LoginPage/Login/Login";
import DashBoard from "../../UserDashboard/DashBoard/DashBoard";
import Profile from "../../UserDashboard/Profile/Profile";
import PrivateRoute from "../Hookes/PrivateRoute/PrivateRoute";
import UsderDashBoard from "../Dashboard/UserDashboard/UsderDashBoard";


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
        },
        {
          path:"/dashboard",
          element:<UsderDashBoard/>,
          
        }
        
      ],
      //user dashboard
     
    }
   
    
])


export default Router;