import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { MdCardMembership } from "react-icons/md";
import Swal from 'sweetalert2'
import NormalAxios from "../../../Hookes/NormalAxios/NormalAxios";


const ManegeMember = () => {
    const normal =  NormalAxios()
    const {data:users=[] , refetch}= useQuery({
        queryKey:["users"],
        queryFn:  async ()=>{
            const result = await normal.get("/all-user",{
              headers:{
                Authorization:`bearer ${localStorage.getItem("access_token")}`
              }
            })
            return result.data
        }

    })
    const handleAdmin= user=>{
        normal.patch(`/all-user/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is now admin`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleMember=user=>{
      normal.patch(`/all-user/member/${user._id}`)
        .then(res=>{
            console.log(res.data)
            
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is now Member`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }

    const handleDelete=user =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            
            if (result.isConfirmed) {
                      normal.delete(`/all-user/${user._id}`)
              Swal.fire({
                title: "Deleted!",
                text: "Your want to user deleted",
                icon: "success"
              });
            }
           refetch()
          });

    }
    console.log(users)
    return (
        <div>
        <div>
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Member</th>
        <th>Action</th>
       
      </tr>
    </thead>
    <tbody>
        {
            users && users.map((user,index)=><tr  key={user._id }>
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
              
                <td>
                    {
                   user &&  user.role=== "admin"? "Admin":<button onClick={()=>handleAdmin(user)}><FaUserGroup/></button>
                    }
                </td>
                <td>
                    {
                   user &&  user.role=== "member"? "Member":<button onClick={()=>handleMember(user)}><MdCardMembership/></button>
                    }
                </td>
                <td>
                    <button onClick={()=>handleDelete(user)}><MdDelete/></button>
                </td>
              </tr>)
        }
    
    </tbody>
  </table>
</div>  
        </div>
        </div>
    );
};

export default ManegeMember;