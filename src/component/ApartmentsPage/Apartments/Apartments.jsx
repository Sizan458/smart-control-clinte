import { Helmet } from "react-helmet-async";
import Footer from "../../ShareComponent/Footer/Footer";
import All_Apartment from "../All_Apartment/All_Apartment";

const Apartments = () => {
    return (
        <div>
            <Helmet>
                <title>Smart Build Control || Apartments</title>
            </Helmet>
           <div>
            <All_Apartment></All_Apartment>
           </div>
           <div className="w-[98%] mx-auto">
            <Footer/>
           </div>
        </div>
    );
};

export default Apartments;