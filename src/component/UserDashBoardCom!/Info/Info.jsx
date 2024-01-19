import React, { useContext } from 'react';
import { AuthContext } from '../../Hookes/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Info = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <div className='md:ml-[50%] lg:ml-[60%] xl:ml-[75%]'>
               <div className="card card-side bg-base-100 shadow-xl ">
  <figure><img src={user && user.photoURL}  alt="Movie" className='p-2 rounded-full'/></figure>
  <div className="card-body">
    <h2 className="card-title">{user && user.displayName}</h2>
    <p>{user && user.email}</p>
  
  </div>
</div>
        </div>
        </div>
    );
};

export default Info;