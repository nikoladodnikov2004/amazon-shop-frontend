import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Autoplay  } from 'swiper/modules';
import image1 from './assets/niesa2.svg'


import './App.css';



    
function Hero() {
  return (
    

  <div className="w-full min-h-screen h-[85v] bg-[#051F20] text-[#DAF1DE] pb-72 px-6 flex justify-center items-center relative overflow-hidden font-sans">



        

      

      
    


    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{ prevEl: '#hero-prev', nextEl: '#hero-next' }}
      pagination={{clickable: true}}
      autoplay={{delay: 5000}}
      className="notched-banner w-[95%] h-[95vh] max-w-9xl min-h-[680px] rounded-xl flex items-center justify-center mt-4  shadow-[0_0px_20px_-5px_rgba(15,23,42,0.4)]"
    >

        
    
        
    
 
    <SwiperSlide>
    <img 
    src="../public/images/robot2.jpg"
    alt="Banner" 
    className="w-full h-full object-cover object-center" 
  />

  <div className="hero-overlay"></div>
    </SwiperSlide>
    <SwiperSlide>
    <img 
    src="../public/images/cafemachine.jpg"
    alt="Banner" 
    className="w-full h-full object-cover object-center" 
    />
    <div className="hero-overlay"></div>
    </SwiperSlide>
    <SwiperSlide>
    <img 
    src="../public/images/slide3.jpg"
    alt="Banner" 
    className="w-full h-full object-cover object-center" 
    />
    <div className="hero-overlay"></div>
    </SwiperSlide>

  </Swiper>
  </div>

  );
}
export default Hero;
