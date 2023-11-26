import { useQuery } from "@tanstack/react-query";
import NormalAxios from "../../../../Hookes/NormalAxios/NormalAxios";

const Agreement = () => {
    // call axios
    const axios = NormalAxios()
   //query 
   const {data:all}=useQuery({
    queryKey:['agreement'],
    queryFn:async()=>{
        const result = await axios.get("/all-agreements")
        return result.data;
    }
   })
   console.log(all)
    return (
        <div>
           <h1 className="text-2xl text-center text-black m-2">All Agreement</h1>
           <div className="w-[80%] mx-auto">
           {
            all&&all.map(data=>(<div key={data._id} className="card m-3 lg:card-side bg-base-100 shadow-xl">
            <figure><img src={data.photo} alt="Album" className="h-[250px] m-2 md:h-[350px] lg:h-[300px]"/></figure>
            <div className="card-body">
              <h2 className="card-title">{data.blockNO
}</h2>
              <p>Rent:{data.dollar}$</p>
              <p>Email:{data.email}</p>
              <p>Name:{data.name}</p>
              <p>Apartment NO
:{data.apartmentNO
}</p>
<p>Floor NO:{data.floorNO}</p>
<p>Status
:{data.status
}</p>
       <img src={data.pic} className="h-[50px] w-[50px]"/>
              <div className="card-actions justify-end text-2xl">
                <button className="btn btn-primary">ADD MEMBER</button>
                <button className="btn btn-primary">DELETE</button>
              </div>
            </div>
          </div>))
           }
           </div>
        </div>
    );
};

export default Agreement;