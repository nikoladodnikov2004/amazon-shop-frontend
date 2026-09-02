import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Autoplay  } from 'swiper/modules';
import image1 from './assets/niesa2.svg'


import './App.css';



    
function Hero() {
  return (
    
<div className="w-full min-h-screen bg-[#051F20] text-[#DAF1DE] px-6 flex justify-center items-center relative overflow-hidden font-sans">
  <div className="relative w-[95%] h-[92vh] max-w-9xl min-h-[680px] mt-4 flex items-center justify-center">
    
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{ prevEl: '#hero-prev', nextEl: '#hero-next' }}
      pagination={{clickable: true}}
      autoplay={{delay: 5000}}
      className="notched-banner w-full h-full mb-10 rounded-xl shadow-[0_0px_20px_-5px_rgba(15,23,42,0.4)] z-0"
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
  <div className='absolute items-center justify-center z-20'>
  <h2>NIESA</h2>
  </div>
  </div>
</div>
  );
}
export default Hero;
