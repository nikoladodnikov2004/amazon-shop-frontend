import {useState} from "react";
import {TiDelete, TiShoppingBag} from "react-icons/ti";
import {FiShoppingCart} from "react-icons/fi";
import { TbShoppingCartOff} from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import CartItemCard from "./CartItemCardtemp.tsx"
import {useCart} from "./context/CartContext.tsx"
import { FiPercent } from "react-icons/fi";

interface CartDrawerProps {
    isOpen:boolean;
    onClose: () => void;
    
}

function CartDrawer ({isOpen, onClose}:CartDrawerProps){

    
    const {cartItems, totalPrice} = useCart();



    return(
        <div className = {`fixed inset-0 z-[999] transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}>
         <div 
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ease-in-out cursor-pointer ${
         isOpen ? "opacity-100" : "opacity-0"
        }`}
            />

        <aside className={`fixed top-0 right-0 h-full w-[85%] sm:w-[450px] bg-[#051F20] bg-gradient-to-b from-[#163B32]/30 to-[#051F20]/50 border border-[#DAF1DE]/15 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
            <div>
                <div className="flex items-center justify-between mt-7 ">
                    <div className="flex items-center justify-start">
                    <FiShoppingCart size={45} className="ml-3 text-[#10B981]/50  border border-[#DAF1DE]/15 rounded-2xl p-2"></FiShoppingCart>
                    <h3 className="text-lg uppercase pl-3 font-extrabold text-[#DAF1DE]/80 tracking-tighter leading-relaxed ">Вашата количка</h3>
                    
                    </div>
              <button    

                                         type="button"

                                         onClick={() =>onClose()}

                                         className="mr-4 text-gray-300/30 cursor-pointer hover:bg-[#DAF1DE]/10 hover:text-gray-300 rounded-lg transform duration-300 leading-relaxed p-1 mb-1 mr-5"

                                         ><VscChromeClose size={25}></VscChromeClose>

                                         </button>
                                         
           
           </div>
               
           {cartItems.length===0?(
            
           
            <div className="flex flex-col items-center justify-center">
            <div className="mt-[50%] text-[#DAF1DE]/60 bg-gradient-to-b from-[#163B32]/30 to-[#051F20]/50 border border-[#10B981]/40 rounded-2xl px-7 py-5">
           <TbShoppingCartOff size={80}></TbShoppingCartOff>
           </div>
           <h2 className=" text-[#DAF1DE]/60 text-xl uppercase font-extrabold mt-4">Вашата количка е празна</h2>
           <h2 className=" text-gray-300/30 text-sm font-bold mt-4 text-center ">Все още нямате добавени артикули. Разгледайте нашите актуални предложения.</h2>
           <button type="submit" className='mt-4 w-full max-w-[70%] py-4 rounded-xl hover:bg-[#DAF1DE] hover:text-[#235347] bg-[#10B981]/50 transition-all shadow-[0_4px_25px_rgba(35,83,71,0.5)]  transform cursor-pointer uppercase font-extrabold tracking-tighter text-sm text-[#DAF1DE]'>Разгледай нашите категории</button>
           </div>

           ) : (
            <div className="flex flex-col gap-3 px-4 max-h-[calc(100vh-220px)] overflow-y-auto mt-4">
                
                    {cartItems.map((cartItem) => (
                        <CartItemCard key={cartItem.id || cartItem.productId} cartItem={cartItem}></CartItemCard>
                    ))}
                
<div className="mt-8 flex flex-col">
    
        <h3 className=' text-lg uppercase font-extrabold text-[#DAF1DE] mb-2'>Код за отстъпка</h3>
        <div className="flex items-center justify-between">
        <input
          
          
          
          placeholder='Въведете вашия промокод'
          
          className='w-[65%] bg-[#051F20] border border-[#10B981]/30 rounded-2xl px-4 py-3.5 text-[#DAF1DE] placeholder-[#8EB69B]/40 focus:outline-none focus:border-[#8EB69B] focus:ring-1 focus:ring-[#8EB69B] transition-all'
        />
        <button className=" text-[#DAF1DE] font-bold bg-[#10B981]/70 p-3 rounded-2xl text-md w-[30%]">
            Приложи
        </button>

        </div>
        <div className="flex items-center justify-center mt-2 gap-2">
        <FiPercent className="text-[#10B981]/70"></FiPercent>
        <p className="text-gray-300/50 tracking-tighter text-sm font-semibold ">Тук може да въведете вашия код за допълнително намаление</p>
      </div>
      <div className="flex flex-col  mt-40 ">
        <p className="uppercase font-extrabold tracking-tighter text-[#DAF1DE] text-lg">Вашата крайна поръчка</p>
        <p className="text-sm text-gray-300/50 mt-2">Цена на количката:</p>
        <p className="text-sm text-gray-300/50 mt-5">Цена за доставка:</p>
        <p className="text-sm text-[#10B981]/70 mt-5 text-lg tracking-tighter uppercase font-extrabold">Обща цена:</p>
        
      </div>
      </div>
      <div className="justify-center items-center flex mt-4 ">
      <button className=" text-[#DAF1DE] font-bold bg-[#10B981]/70 p-3 rounded-2xl text-md w-full ">
            Приложи
        </button>
        </div>
            </div>
)}
            
           
        </div>   
                              
        </aside>
          
        </div>
        
        
    )
}

export default CartDrawer;