import { Helmet } from "react-helmet-async";
import Footer from "../../ShareComponent/Footer/Footer";
import From from "../From/From";

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Smart Build Control || Login</title>
            </Helmet>
           <div>
            <From/>
            </div> 
            <div className="w-[95%] mx-auto">
              <Footer/>
            </div>
        </div>
    );
};

export default Login;