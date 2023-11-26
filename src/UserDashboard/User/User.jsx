import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const User = ({user}) => {
useEffect(() => {
    
},[]);

    console.log(user)
    const {apartmentNO,blockNO,dollar,floorNO,photo}=user
    //using aos
    useEffect(() => {
        AOS.init({duration:1500, delay:15});
    },[])
    return (
        <div className="m-3">
           <div className="card md:card-side bg-base-100 shadow-xl dark:bg-rose-200" data-aos="fade-up">
  <figure><img src={photo} alt="Album"  className='h-[200px] w-full m-1 rounded-lg md:h-[250px] lg:h-[350px]'/></figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-semibold text-black">{blockNO}</h2>
    <div>
        <p className='text-2xl font-bold text-black'>Rent:{dollar}$</p>
    </div>
    <div className='  text-xl text-black  font-semibold'>
        <p>Apartment No:{apartmentNO}</p>
        <p>Floor No:{floorNO}</p>
    </div>

  </div>
</div>
        </div>
    );
};

export default User;