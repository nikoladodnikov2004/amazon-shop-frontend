import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Autoplay  } from 'swiper/modules';
import image1 from './assets/niesa2.svg'
import { SearchIcon, Sparkles, Truck, Clock,ShieldCheck , ArrowRight, } from 'lucide-react';
import { RiDiscountPercentFill } from "react-icons/ri";


import './App.css';



    
function Hero() {
  return (
    

<div className="w-full h-screen bg-[#051F20] text-[#DAF1DE] relative overflow-hidden font-sans">
  <div className="relative w-full h-full flex items-center justify-center">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{ prevEl: '#hero-prev', nextEl: '#hero-next' }}
      pagination={{clickable: true}}
      autoplay={{delay: 5000}}
      className=" w-full h-full mb-10 rounded-xl shadow-[0_0px_20px_-5px_rgba(15,23,42,0.4)] z-0"
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
    <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#051F20]/65 via-[#051F20]/75 to-transparent pointer-events-none" />


  <div className="absolute flex flex-col items-center justify-center text-center pointer-events-none z-20 px-4">
    <div className="inline-flex items-center gap-3 uppercase tracking-widest mb-6 rounded-full bg-[#10B981]/10 border border-[#DAF1DE]/10 font-extrabold text-sm px-3 py-1">
    <Sparkles className="h-4.5 w-4.5 animate-pulse"></Sparkles>
    <span>Професионално снабдяване на вашия бизнес</span>
    </div>
  <h1 className="font-niesa text-[122px] text-[#DAF1DE] tracking-wide uppercase leading-none drop-shadow-2xl flex items-baseline justify-center gap-4 "> 
    <h1>Niesa</h1>
    <span className="translate-y-3 text-[#10B981]/50">
      Supply
    </span>
  </h1>

    <p className="font-light my-6 text-base text-gray-300 leading-relaxed max-w-2xl sm:text-lg"> Вашето място за всичко, от което имате нужда. Кафемашини, консумативи, техника и бизнес оборудване с гарантирано качество.</p>

    <div className="flex items-center justify-center gap-5 mt-4">
    <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#10B981] px-4 py-3 uppercase font-bold tracking-tighter">Разгледай категориите
      <ArrowRight></ArrowRight>
    </button>
    <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#0B2B26] border border-[#163B32] px-4 py-3 uppercase font-bold tracking-tighter">Нашите Промоции
      <RiDiscountPercentFill></RiDiscountPercentFill>
    </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#163B32]/60 w-full mt-6">
    
    <div className="flex items-center justify-center gap-1 mt-5 text-[#DAF1DE]/80 font-semibold">
    <Truck className="text-[#10B981]"></Truck>
    <span>Бърза доставка в цялата страна</span>
    </div>
    <div className="flex items-center justify-center gap-1 mt-5 text-[#DAF1DE]/80 font-semibold">
      <ShieldCheck className="text-[#10B981]"></ShieldCheck>
      <span>100% Гарантирано качество</span>
    </div>
    <div className="flex items-center justify-center gap-1 mt-5 text-[#DAF1DE]/80 font-semibold">
      <Clock className="text-[#10B981]"></Clock>
      <span>Професионален сервиз & поддръжка</span>
    </div>
    </div>
      

 
       

    
  

  </div>
  
  </div>
  
  </div>

  );
}
export default Hero;
