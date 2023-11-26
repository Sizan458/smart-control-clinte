import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Home from "../HomePage/Home/Home";
import Apartments from "../ApartmentsPage/Apartments/Apartments";
import Register from "../RegisterPage/Register/Register";
import Login from "../LoginPage/Login/Login";
import PrivateRoute from "../Hookes/PrivateRoute/PrivateRoute";
import UsderDashBoard from "../Dashboard/UserDashboard/UsderDashBoard";
import ErrorPage from "../EorrorPage/ErrorPage";
import DashBoard2 from "../Dashboard/DashBoard2/DashBoard2";
import Member from "../Dashboard/DashBoard2Page/AdmineDashboad/Member/Member";
import Announcements from "../Dashboard/DashBoard2Page/AdmineDashboad/Announcements/Announcements";
import Agreement from "../Dashboard/DashBoard2Page/AdmineDashboad/Agreement/agreement";


const Router =  createBrowserRouter([
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Outlet/>
      </div>,
      errorElement:<ErrorPage/>,
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
          element:<PrivateRoute><UsderDashBoard/></PrivateRoute>
          
        }
        
      ],
     
     
    },
    {
      path:'dashboard2',
     element:<div><DashBoard2/>
     <Outlet/>
     </div>,
     children:[
      {
        path:'member',
        element:<Member/>
      },
      {
        path:"announcements",
        element:<Announcements/>
      },
      {
        path:"agreement",
        element:<Agreement/>
      }
     ]
    }
   
    
])


export default Router;