import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Home from "../HomePage/Home/Home";
import Apartments from "../ApartmentsPage/Apartments/Apartments";
import Register from "../RegisterPage/Register/Register";

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
        }
      ]
    }
])

export default Router;