import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Autoplay  } from 'swiper/modules';
import image1 from './assets/niesa2.svg'
import { SearchIcon } from 'lucide-react';


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
    src="../public/images/12234.png"
    alt="Banner" 
    className="w-full h-full object-cover object-center blur-[0.5px]" 
  />

  <div className="hero-overlay"></div>
    </SwiperSlide>
    <SwiperSlide>
      
    <img 
    src="../public/images/cafemachine.jpg"
    alt="Banner" 
    className="w-full h-full object-cover object-center blur-[0.5px]" 
    />
    <div className="hero-overlay"></div>
    </SwiperSlide>
    <SwiperSlide>
    <img 
    src="../public/images/slide3.jpg"
    alt="Banner" 
    className="w-full h-full object-cover object-center blur-[0.5px] " 
    />
    <div className="hero-overlay"></div>
    </SwiperSlide>

  </Swiper>


  <div className="absolute flex flex-col items-center justify-center text-center pointer-events-none z-20 px-4">
    
  <h1 className="font-niesa text-[172px] text-[#DAF1DE] tracking-wide uppercase leading-none drop-shadow-2xl flex items-baseline justify-center gap-4 "> 
    <h1>Niesa</h1>
    <span className="translate-y-8 ">
      Supply
    </span>
  </h1>

    <p className='font-extrabold mt-8 text-[22px] text-[#DAF1DE]/90 max-w-lg  tracking-wide drop-shadow-md'>
      Вашето място за всичко, от което имате нужда
    </p>

      <div className="mt-6 w-full max-w-xl pointer-events-auto">
        <div className="flex items-center bg-[#051F20]/80 border border-[#DAF1DE]/30 backdrop-blur-md rounded-full p-2 shadow-[0_20px_40px_rgba(0,0,0,0.6)] focus-within:border-[#235347] transition-all duration-300">
           <input
          type='text'
          placeholder='Какво търсите днес?...'
           className='w-full bg-transparent px-6 py-4 text-[#DAF1DE] placeholder-[#8EB69B]/50 focus:outline-none'
       />
       <button className="text-2xl bg-[#235347] px-6 py-4 rounded-full hover:bg-[#DAF1DE] hover:text-[#235347] transition-all duration-300 uppercase tracking-tight shadow-md ">
          🔍︎
       </button>
        </div>
      </div>

 
       

    
  

  </div>
  
  </div>
  
  </div>

  );
}
export default Hero;
