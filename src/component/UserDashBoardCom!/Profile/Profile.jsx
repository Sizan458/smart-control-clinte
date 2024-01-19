import React, { useContext } from 'react';
import Info from '../Info/Info';
import { Helmet } from 'react-helmet-async';
import Order from '../Order/Order';


const Profile = () => {
   
    return (
        <div>
              <Helmet>
                <title>Smart Build Control || Profile</title>
                </Helmet>
          <div>
          <Info/>
          </div>
          <div>
            <Order/>
          </div>
        </div>
    );
};

export default Profile;