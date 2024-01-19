
import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineConsoleSql } from "react-icons/ai";
import NormalAxios from "../../Hookes/NormalAxios/NormalAxios";
const Order = () => {
    const nAxios = NormalAxios()
    const [order,setOrder] =useState([])
    const [noData ,setNoData] = useState('')
    
   
    useEffect(() => {
        const buy=JSON.parse(localStorage.getItem('ApartmentData'))
        setOrder(buy)
        if(buy){
            setOrder
        }else{
            setNoData('You Have Not Selected any Product')
        }
        
    },[])

    const handleDelete = (productId) => {
        const response = nAxios.delete(`/all-agreements${productId}`
        );
        console.log(response)
        
        //localStorage removeItem by id
        const updatedOrder = order.filter(product => product._id !== productId);
        localStorage.setItem('ApartmentData', JSON.stringify(updatedOrder));
    
        // refetch  functionality
        setOrder(updatedOrder);
        
       
    };
    
    
    return (
       
        <div>
        <div>
         {
             noData ? <p className="text-2xl text-center mt-[10%] text-red-400">{noData}</p>:
             <div className="w-[96%] mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 ">
              {
                 order.map(product=>(<div className="hero mt-2 bg-base-200" key={product._id} >
                 <div className="hero-content flex-col lg:flex-row">
                   <img src={product.img1} className=" rounded-lg shadow-xl md:h-[220px]" />
                   <div>
                     <div>
                     <p className="text-2xl"> Block Name:{product.block}</p>
                         <p className="text-2xl">price:{product.rent}$</p>
                         <p className="text-2xl">Floor:{product.floor}</p>
                        
                     </div>
                    <div className="flex justify-end">
                    <btn className="text-2xl btn"  onClick={() => handleDelete(product._id)} ><AiFillDelete></AiFillDelete></btn>
                    </div>
                   </div>
                 </div>
               </div>))
              }
             </div>
         }
        </div>
     </div>
    );
};

export default Order;