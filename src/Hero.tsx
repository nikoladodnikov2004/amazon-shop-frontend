import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Autoplay  } from 'swiper/modules';


    
function Hero() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
        pagination={{clickable: true}}
        autoplay={{delay: 5000}}
        className="w-full h-[85vh]"
    >
    <SwiperSlide>
    <div className="hero text-center bg-gray-100 py-60">
      <div className="container mx-auto px-4">
        <h1 className="text-7xl font-bold mb-8">Welcome to AmazonShop</h1>
        <p className="text-lg mb-8">Your one-stop shop for all your needs!</p>
        <button className="bg-[#00c288] text-white px-6 py-3 rounded hover:bg-[#00a36c] transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="hero text-center bg-gray-100 py-60">
      <div className="container mx-auto px-4">
        <h1 className="text-7xl font-bold mb-8">Discover Amazing Deals</h1>
        <p className="text-lg mb-8">Check out our latest offers and discounts!</p>
        <button className="bg-[#00c288] text-white px-6 py-3 rounded hover:bg-[#00a36c] transition-colors duration-300">
          View Deals
        </button>
      </div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    

    </SwiperSlide>
    <SwiperSlide>
    
    </SwiperSlide>

  </Swiper>
  );
}
export default Hero;
