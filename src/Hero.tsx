import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Autoplay  } from 'swiper/modules';
import image1 from './assets/niesa2.svg'


import './App.css';



    
function Hero() {
  return (
    <div className="relative w-full">
    <button id="hero-prev" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white text-[#11676a] rounded-full shadow-[0_0_20px_5px_rgba(16,185,129,0.35)] flex items-center justify-center">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
    </button>

   
    <button id="hero-next" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white text-[#11676a] rounded-full shadow-[0_0_20px_5px_rgba(16,185,129,0.35)] flex items-center justify-center">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
    </button>

  <div className="w-full min-h-screen h-[85v] bg-[#051F20] text-[#DAF1DE] pt-32 pb-16 px-6 flex justify-center items-center relative overflow-hidden font-sans">



        

      

      
    


    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{ prevEl: '#hero-prev', nextEl: '#hero-next' }}
      pagination={{clickable: true}}
      autoplay={{delay: 5000}}
      className="notched-banner w-[90%] min-h-screen rounded-xl flex items-center justify-center mt-6 border border-[#163B32] shadow-[0_0px_20px_-5px_rgba(15,23,42,0.4)]"
    >

        
    
        
    <SwiperSlide>
      
      
      
</SwiperSlide>
 
    <SwiperSlide>
    <img 
    src="../public/images/banner1.png"
    alt="Banner" 
    className="w-full h-full object-cover object-center" 
  />
    </SwiperSlide>
    <SwiperSlide>
    

    </SwiperSlide>
    <SwiperSlide>
    
    </SwiperSlide>

  </Swiper>
  </div>
</div>
  );
}
export default Hero;
