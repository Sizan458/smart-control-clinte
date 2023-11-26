import { useQuery } from "@tanstack/react-query";
import NormalAxios from "../../component/Hookes/NormalAxios/NormalAxios";
import User from "../User/User";
import { useContext} from "react";
import { AuthContext } from "../../component/Hookes/AuthProvider/AuthProvider";


const Profile = () => {
  const {user} =useContext(AuthContext)
  console.log(user)
 
   //call axios
   const axios= NormalAxios()
    //use query
  const {data:agreement}=useQuery({
        queryKey:['agreement'],
        queryFn:async()=>{
            const result = await axios.get('/all-agreements')
               
        return result.data
         
        }

    })

        return (
        <div>
          <div className="w-[90%] mx-auto mt-2">
            {
              agreement &&  agreement.map(user=><User key={user._id} user={user}/>)
            }
          </div>
          <div className="mt-2 mx-2">
           
          </div>
        </div>
    );
};

export default Profile;