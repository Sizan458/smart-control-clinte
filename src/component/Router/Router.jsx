import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Home from "../HomePage/Home/Home";
import Apartments from "../ApartmentsPage/Apartments/Apartments";
import Register from "../RegisterPage/Register/Register";
import Login from "../LoginPage/Login/Login";
import ErrorPage from "../EorrorPage/ErrorPage";
import UserDashboard from "../UserDashboard/UserDashboard";
import Profile from "../UserDashBoardCom!/Profile/Profile";
import PrivateRoute from "../Hookes/PrivateRoute/PrivateRoute";
import MainDash from "../MainDashBoard/MainDash/MainDash";
import Payment from "../MainDashBoard/Payment/Payment";
import ManegeMember from "../MainDashBoard/MainDash/ManegeMember/ManegeMember";






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
       
        
      ],
     
    },
   {
    path:"/dashboard",
    element:<div>
      <PrivateRoute><UserDashboard/></PrivateRoute>
      <Outlet></Outlet>
    </div>,
    children:[
    {
      path:"profile",
      element:<Profile/>
    }
    ]
   },
   {
    path:"/dashboard2",
    element:<div>
      <MainDash/>
      <Outlet/>
    </div>,
    children:[
      {
        path:"Payment",
        element:<Payment/>
      },
      //admin only path
      {
        path:"menageMember",
        element:<ManegeMember/>
      }
    ]
   }
   
    
])


export default Router;