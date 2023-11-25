import { Helmet } from "react-helmet-async";
import Footer from "../../ShareComponent/Footer/Footer";
import From from "../From/From";

const Register = () => {
    return (
        <div>
          <Helmet><title>Smart Build control || Register</title></Helmet>
          <div>
            <From/>
          </div>
          <div className="w-[95%] mx-auto">
            <Footer/>
          </div>
        </div>
    );
};

export default Register;