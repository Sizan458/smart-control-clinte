import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Hookes/AuthProvider/AuthProvider';
import Profile from '../../../UserDashboard/Profile/Profile';
import Footer from '../../ShareComponent/Footer/Footer';
import NormalAxios from '../../Hookes/NormalAxios/NormalAxios';
import { useQuery } from '@tanstack/react-query';

const UsderDashBoard = () => {
    const{user}=useContext(AuthContext)
    // call hooks
      const axios =NormalAxios()
     // query functions
     const {data:news}=useQuery({
      queryKey:["newses"],
      queryFn:async()=> {
        const result  =await axios.get("/all-announcement")
        return result.data
      }
      
     })
       console.log(news)
    return (
        <div>
          <Helmet>
            <title>Smart Build Control ||Dashboard</title>
            </Helmet> 
         <div>
          {
            user?  <div className='text-xl font-bold flex m-3 gap-3 justify-center items-center text-black dark:text-rose-600'>
            <p className=''>Name:{user.displayName}</p>
            <p>Email:{user.email}</p>
          </div >:<span>NA</span>
          }
            <div className="grid grid-cols-1 lg:grid-cols-2">
            <Profile/>
            <div><h1 className=' text-black dark:text-rose-600 text-2xl mt-2 text-center'>Announcement</h1>
            <div>
              <h1 className=' text-black dark:text-rose-600 text-2xl mt-2 text-center'>Here you can see all notice</h1>
              <div className='mt-2 w-[80%] mx-auto'>
                {
                  news && news.map(news=>(<div key={news._id} className="card m-3 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{news.tittle
}</h2>
                    <p>{news.description
}</p>
                    
                  </div>
                </div>))
                }
              </div>
            </div>
            </div>
            </div>
            <div className='mt-2 mx-3'>
              <Footer/>
            </div>
         </div>
        </div>
    );
};

export default UsderDashBoard;