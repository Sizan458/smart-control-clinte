import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
          <title>  Smart Build Control || Home</title>
            </Helmet>
            <div>
            <Banner/>
          </div>
          <div>
            <h1 className=" text-center font-bold text-2xl m-2 text-black dark:text-red-800">Preview</h1>
          </div>
          <div>
            <Slider/>
          </div>
         
        </div>
    );
};

export default Home;