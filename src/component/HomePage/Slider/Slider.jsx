import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
    return (
        <div className='w-[95%] mx-auto mt-1'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" rounded-lg"
      >
        <SwiperSlide><img src='https://i.ibb.co/W5mtsBp/pexels-vecislavas-popa-1571460.jpg' className='h-[250px] w-full md:h-[350px] lg:h-[450px] xl:h-[550px]'/></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/GHp3sMs/pexels-max-rahubovskiy-6782567.jpg'  className='h-[250px] w-full  md:h-[350px] lg:h-[450px] xl:h-[550px]'/></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/Hq7WLkw/pexels-terry-magallanes-2635038.jpg'  className='h-[250px] w-full  md:h-[350px] lg:h-[450px] xl:h-[550px]'/></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/PTdrqhv/pexels-jean-van-der-meulen-1457847.jpg'  className='h-[250px] w-full  md:h-[350px] lg:h-[450px] xl:h-[550px]'/></SwiperSlide>
        
      </Swiper> 
        </div>
    );
};

export default Slider;