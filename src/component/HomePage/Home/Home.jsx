import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
          <title>  Smart Build Control || Home</title>
            </Helmet>
          <div>
            <Slider/>
          </div>
        </div>
    );
};

export default Home;