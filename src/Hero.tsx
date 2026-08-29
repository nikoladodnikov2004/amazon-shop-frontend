import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Autoplay  } from 'swiper/modules';
import image1 from './assets/niesa2.svg';

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

<div className="mx-auto flex justify-between items-center px-12 md:px-20 relative bg-gradient-to-r from-[#11676a]/15 via-gray-100 to-emerald-50/60 w-[90%] h-[85vh] mt-20 rounded-xl shadow-[0_0px_20px_-5px_rgba(15,23,42,0.4)] ">

<div className="container mx-auto px-4">
        <h1 className="text-7xl font-bold mb-8 uppercase text-slate-700 ">Добре дошли в NiESa!</h1>
        <p className="text-lg mb-8 uppercase text-slate-700">Вашият един и единствен магазин за всички нужди!</p>

        <div className="flex gap-4">
        <button className="bg-[#11676a] text-white px-6 py-3 rounded-lg hover:bg-[#00a36c] transition-colors duration-300">
          Купете сега
        </button>
        <button className="bg-transparent border-2 border-[#11676a] text-[#11676a] px-6 py-3 rounded-lg hover:bg-[#11676a] hover:text-white transition-colors duration-300">
          Купете сега
        </button>
        </div>

      </div>

      
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{ prevEl: '#hero-prev', nextEl: '#hero-next' }}
      pagination={{clickable: true}}
      autoplay={{delay: 5000}}
      className="w-[80%] h-[65vh] rounded-xl shadow-[0_0px_20px_-5px_rgba(15,23,42,0.4)]"
    >

        
    
        
    <SwiperSlide>
      
      <img src="./public/images/banner2.png" alt="Banner 2" className="w-full h-full object-cover rounded-xl" />
      
</SwiperSlide>
 
    <SwiperSlide>
    <img src="./public/images/banner2.png" alt="Banner 2" className="w-full h-full object-cover rounded-xl" />
    </SwiperSlide>
    <SwiperSlide>
    
<img src="./public/images/banner2.png" alt="Banner 2" className="w-full h-full object-cover rounded-xl" />
    </SwiperSlide>
    <SwiperSlide>
    <img src="./public/images/banner2.png" alt="Banner 2" className="w-full h-full object-cover rounded-xl" />
    </SwiperSlide>

  </Swiper>
  </div>
  </div>
  );
}
export default Hero;
