import { useQuery } from "@tanstack/react-query";
import NormalAxios from "../../../../Hookes/NormalAxios/NormalAxios";

const Member = () => {
    const axios =NormalAxios()
    const {data:users}=useQuery({
        queryKey:["user"],
        queryFn:async()=>{
            const result = await axios.get('/all-user')
            return result.data
        }
    })
   
    return (
        <div>
            <div>
                <h1 className="text-xl text-center text-black m-2">All user</h1> 
            </div>
            <div >
                <h1 className="text-xl text-center text-black m-2">Total user:{users&&users.length}</h1>

            </div>
            <div className="w-[80%] mx-auto">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className="text-xl">Name</th>
        <th className="text-xl">Email</th>
        <th className="text-xl">Button</th>
      </tr>
    </thead>
    <tbody>
        {
            users && users.map((user,index)=> <tr key={user._id} className="bg-base-200">
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button className="btn btn-error">Make Member</button></td>
          </tr>)
        }

      
    </tbody>
  </table>
</div>
            </div>
            
        </div>
    );
};

export default Member;