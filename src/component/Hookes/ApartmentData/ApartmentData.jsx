import { useQuery } from "@tanstack/react-query";
import NormalAxios from "../NormalAxios/NormalAxios";


const ApartmentData = () => {
    const normalAxios =NormalAxios()
    
   
    const {data:apartments,refetch} = useQuery({
        queryKey:['all-apartment'],
        queryFn:async()=>{
            const result = await normalAxios.get('/all-apartments')
         
            return result.data
           
        }
    })
    
    return [apartments,refetch,]
};

export default ApartmentData;