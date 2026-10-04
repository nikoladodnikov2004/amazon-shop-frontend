import {useState} from "react";
import {TiDelete, TiShoppingBag} from "react-icons/ti";
import {FiHeart} from "react-icons/fi";
import { TbShoppingCartOff} from "react-icons/tb";


interface WishListDrawerProps {
    isOpen:boolean;
    onClose: () => void;
    wishListItems?: any[];
    onRemoveFromWishList?: (id:number) => void;
}

function WishListDrawer ({isOpen, onClose, wishListItems =[], onRemoveFromWishList}:WishListDrawerProps){

    
    const totalPrice = wishListItems.reduce((acc,item) => acc + (item.price * (item.quantity || 1)), 0);



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

        <aside className={`fixed top-0 right-0 h-full w-[85%] sm:w-[450px] 
         border border-[#DAF1DE]/15 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
            <div>
                <div className="flex items-center justify-between mt-7 ">
                    <div className="flex items-center justify-start">
                    <FiHeart size={45} className="ml-3 text-[#10B981] bg-[#163B32]/30 border border-[#DAF1DE]/15 rounded-2xl p-2"></FiHeart>
                    <h3 className="text-lg uppercase pl-3 font-extrabold text-[#DAF1DE] tracking-tighter leading-relaxed ">Вашата количка</h3>
                    </div>
         <button    
                                         type="button"
                                         onClick={() =>onClose()}
                                         className="mr-4 text-gray-300 cursor-pointer hover:bg-[#DAF1DE]/10 rounded-2xl hover:text-[#10B981] transform duration-300 leading-relaxed "
                                         ><TiDelete size={30}></TiDelete>
                                         </button>
                                         
                
           </div>
           <div className="border-0.5px border-t mt-5 border-[#DAF1DE]/20"></div>
            <div className="flex flex-col items-center justify-center">
            <div className="mt-[50%] text-[#DAF1DE]/60 bg-gradient-to-b from-[#163B32]/30 to-[#051F20]/50 border border-[#DAF1DE]/15 rounded-2xl px-7 py-5">
           <TbShoppingCartOff size={100}></TbShoppingCartOff>
           </div>
           <h2 className=" text-[#DAF1DE]/60 text-xl uppercase font-extrabold mt-4">Вашата количка е празна</h2>
           <button type="submit" className='w-full max-w-[60%] py-4 mt-4 rounded-xl bg-[#DAF1DE] text-[#235347] hover:bg-[#163B32] transition-all shadow-[0_4px_25px_rgba(35,83,71,0.5)]  transform cursor-pointer uppercase font-extrabold tracking-tighter text-sm hover:text-[#DAF1DE]'>Разгледай нашите категории</button>
           </div>

           
        </div>   
                                  
        </aside>
          
        </div>
        
        
    )
}

export default WishListDrawer
;