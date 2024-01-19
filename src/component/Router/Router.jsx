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
   }
   
    
])


export default Router;