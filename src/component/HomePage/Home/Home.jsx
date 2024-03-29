import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Preview from '../Preview/Preview';
import Coupon from '../Coupon/Coupon';
import Footer from '../../ShareComponent/Footer/Footer';
import Location from '../Location/Location';

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
            <Preview/>
          </div>
          <div>
            <Coupon/>
          </div>
          <div>
           <Location/>
          </div>
          <div className="w-[98%] mx-auto mt-6">
            <Footer/>
          </div>
        </div>
    );
};

export default Home;