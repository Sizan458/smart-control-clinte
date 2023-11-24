import LazyLoad from 'react-lazy-load';
const Single_Apartment = ({data}) => {
    console.log(data)
    const {apartment,block,floor,img1,rent} = data
   const handleAgreement =()=>{
    
    const dollar = rent
    console.log(dollar)
   }

   
    return (
        <div>
            <LazyLoad threshold={0.50} height={480} transition opacity>
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