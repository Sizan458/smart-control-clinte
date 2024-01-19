import { useContext, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { AuthContext } from '../../Hookes/AuthProvider/AuthProvider';
import NormalAxios from '../../Hookes/NormalAxios/NormalAxios';
import swal from 'sweetalert';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Single_Apartment = ({data}) => {
  const [selectedDate, setSelectedDate] = useState(null);

    const {user}=useContext(AuthContext)
    const axios = NormalAxios()
    const {apartment,block,floor,img1,rent,_id} = data
   const handleAgreement =()=>{

    const dollar = rent
    const  blockNO =block
    const floorNO =floor
    const photo =img1
    const apartmentNO =apartment
    const name = user.displayName
    const  email =user.email
    const pic = user.photoURL
   const  date = selectedDate
    const  status = 'pending'
    const  agreement ={blockNO,floorNO,photo,apartmentNO,name,email,status,dollar,pic,date}
     // local storage set function
     const AddApartment =[]
        
     const add=  JSON.parse(localStorage.getItem('ApartmentData'))
     if(!add){
       AddApartment.push(data)
       localStorage.setItem('ApartmentData', JSON.stringify(AddApartment))
 
     }else{
     
 
       AddApartment.push(...add, data)
       localStorage.setItem('ApartmentData', JSON.stringify(AddApartment))
      
     }
    axios.post('/all-agreements',agreement)
    swal("Thank YOu!", "We will email you", "success");
    
   }

   
    return (
        <div>
            <LazyLoad threshold={0.50} height={540} transition opacity>
            <div className="card  bg-[#B8B595] shadow-xl group dark:bg-[#E3DFAF]">
  <div className="card-body">
    <h2 className="text-xl font-bold xl:text-center "> block Name:{block}</h2>
       <div className='w-[90%] mx-auto flex  gap-1 items-center justify-around text-2xl'>
       <div className='flex  items-center justify-center gap-2'>
        <img src="https://i.ibb.co/kmbHYVx/building.png" className='h-[25px]' alt="" />
        {floor}
       </div>
       <div className='flex items-center justify-center gap-2'>
        <img src="https://i.ibb.co/YNt1Qsd/room-key.png" className='h-[25px]' alt="" />
        {apartment}
       </div>
       <div className='flex items-center justify-center gap-2'>
       <img src="https://i.ibb.co/6YXSWDm/insurance-removebg-preview.png" className='h-[25px]' alt="" />
       <p>{rent}$</p>
       
       </div>
       </div>
       <DatePicker
  selected={selectedDate}   placeholderText='Pick a date'
  onChange={(date) => setSelectedDate(date)}
  dateFormat="dd/MM/yyyy"
  className='text-xl text-black py-1 ml-[45px]'
/>

       <div>
      
    </div>
       <div className='mt-3'>
      
      
      <button className="btn  btn-sm  w-full text-lg " onClick={handleAgreement}>Agreement</button>
    
      
       </div>
     
  </div>
  <figure><img src={img1} alt="Shoes"  className='h-[250px] w-full p-1 m-1 group-hover:scale-150 transition'/></figure>
</div>

            </LazyLoad>
        </div>
    );
};

export default Single_Apartment;