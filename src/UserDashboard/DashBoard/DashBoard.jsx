import { Helmet } from "react-helmet-async";

import NavBar from "../NavBar/NavBar";



const DashBoard = () => {
    return (
        <div>
           <Helmet>
            <title>Smart Build Control ||Dashboard</title>
            </Helmet> 
            <NavBar/>
           
        </div>
    );
};

export default DashBoard;