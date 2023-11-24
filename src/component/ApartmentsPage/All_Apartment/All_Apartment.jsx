import ApartmentData from "../../Hookes/ApartmentData/ApartmentData";
import Single_Apartment from "../Single_Apartment/Single_Apartment";

const All_Apartment = () => {
    const [apartments]=ApartmentData()
    return (
        <div className="w-[90%] mx-auto mt-2 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {
           apartments && apartments.map(data =><Single_Apartment key={data._id} data={data}/>)
          }  
        </div>
    );
};

export default All_Apartment;