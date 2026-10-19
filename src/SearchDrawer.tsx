import {useState} from "react";
import {TiDelete, TiShoppingBag} from "react-icons/ti";
import {FiShoppingCart, FiSearch} from "react-icons/fi";
import { TbShoppingCartOff} from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import BestSellerItemCard from "./BestSellerItemCard.tsx"
import {useCart} from "./context/CartContext.tsx"
import {useSearch} from "./context/SearchContext.tsx"
import { FiPercent } from "react-icons/fi";

interface SearchDrawerProps {
    isOpen:boolean;
    onClose: () => void;
    
}

function SearchDrawer ({isOpen, onClose}:SearchDrawerProps){
 const {bestSellers} = useSearch();
   
   



    return(
        <div className = {`fixed inset-0 z-[999] flex items-center justify-center transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}>
         <div 
        onClick={onClose}
        className={`fixed inset-0 bg-black/70  transition-opacity duration-300 ease-in-out cursor-pointer ${
         isOpen ? " opacity-100" : " opacity-0"
        }`}
            />

        <aside className={`fixed z-10 w-full max-w-[980px] h-auto h-[55vh] top-3 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "-translate-y-0" : "-translate-y-[calc(100%+2rem)]"
        }`}>
            <div className="h-full w-full bg-[#051F20]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] p-5 relative z-20">
                    <div className="flex items-center justify-start">
                    <FiSearch size={45} className="ml-1 text-[#10B981]  border border-[#DAF1DE]/15 rounded-2xl p-2"></FiSearch>
                    <h3 className="text-lg uppercase pl-3 font-extrabold text-[#DAF1DE]/80 tracking-tighter leading-relaxed   ">Търсачка</h3>
                    
                    </div>
                    <div className="flex-1 relative">
                    
                    
                     <div className="flex items-center justify-center gap-3">
                        
                    <input
          
          
          
          placeholder='Какво търсите днес?'
          
          className='w-full max-w-[500px] bg-[#051F20] border border-[#10B981]/30 rounded-2xl px-3 py-2.5 text-[#DAF1DE] placeholder-[#8EB69B]/40 focus:outline-none focus:border-[#8EB69B] focus:ring-1 focus:ring-[#8EB69B] transition-all'
        
        />
          <FiSearch size={40} className="bg-[#10B981]/50 text-[#DAF1DE] rounded-2xl px-2"></FiSearch>   
          </div>       
                    
                    </div>
                    <div className="gap-1 ">
                    
              <button    

                                         type="button"

                                         onClick={() =>onClose()}

                                         className="mr-2 text-gray-300/30 cursor-pointer hover:bg-[#DAF1DE]/10 hover:text-gray-300 rounded-lg transform duration-300 leading-relaxed p-1 mb-1 mr-5"

                                         ><VscChromeClose size={25}></VscChromeClose>

                                         </button>
                                         </div>
                                         
           
           </div>
           

           
            <div className="p-6 flex-1 relative ">
                <p className="mb-2 uppercase font-bold text-sm text-[#10B981]  ">Популярни търсения</p>
                
                
                <div className="flex flex-wrap gap-2 ">
                    {["Кафемашини", "Прахосмукачки", "Аксесоари", "Телефони", "Таблети"].map((item)=>(
                       <button
                       key={item}
                       type="button"
                       className="border bg-[#051F20]/80 border-[#10B981]/20 text-gray-300/50 px-3 py-1.5 text-xs rounded-full font-bold hover:border-[#10B981]/50 hover:text-gray-300 transform-all duration-200"
                       >
                        {item}
                       </button> 
                    ))}
                </div>
                <div className="mt-10">
                    <p className=" uppercase font-bold text-sm text-[#10B981] mb-2 ">Най-продавани продукти</p>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bestSellers.map((bestSellerItem)=>(
                <BestSellerItemCard key={bestSellerItem.id || bestSellerItem.productId} bestSellerItem={bestSellerItem}></BestSellerItemCard>
            ))}
            
           </div>
           
           </div>
             </div>  
             
           
            
           
        </div>   
                              
        </aside>
          
        </div>
        
        
    )
}

export default SearchDrawer;