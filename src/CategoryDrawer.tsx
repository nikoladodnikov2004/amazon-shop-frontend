
import {useState} from "react";
import {TiDelete, TiShoppingBag } from "react-icons/ti";
import {FiShoppingCart} from "react-icons/fi";
import { TbShoppingCartOff} from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import WishListItemCard from "./WishListItemCard.tsx"
import {useWishList} from "./context/WishListContexttemp.tsx"
import { FiPercent } from "react-icons/fi";
import { TbCategory } from "react-icons/tb";
import CategoryItemCard from "./CategoryItemCard.tsx"
import {useCategory} from "./context/CategoryContext.tsx"


interface CategoryProps {
    isOpen:boolean;
    onClose: () => void;
    
}

function CategoryDrawer ({isOpen, onClose}:CategoryProps){

    
    const {categoryItems} = useCategory();
    
    
    



    return(
        <div className = {`fixed inset-0 z-[999]  transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}>
         <div 
        onClick={onClose}
        className={`fixed inset-0 bg-black/70 transition-opacity duration-300 ease-in-out cursor-pointer ${
         isOpen ? "opacity-100" : "opacity-0"
        }`}
            />

        <aside className={`fixed top-4 left-4   h-[calc(100vh-2rem)] w-[calc(100%-2rem)] sm:w-[420px] transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-[calc(100%+2rem)]"
        }`}>
            <div className="h-full w-full bg-[#051F20]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] p-5 relative z-20">
                    <div className="flex items-center justify-start">
                    <TbCategory size={45} className="ml-1 text-[#10B981]  border border-[#DAF1DE]/15 rounded-2xl p-2"></TbCategory>
                    <h3 className="text-lg uppercase pl-3 font-extrabold text-[#DAF1DE]/80 tracking-tighter leading-relaxed ">Категории</h3>
                    
                    </div>
                    
              <button    

                                         type="button"

                                         onClick={() =>onClose()}

                                         className="mr-4 text-gray-300/30 cursor-pointer hover:bg-[#DAF1DE]/10 hover:text-gray-300 rounded-lg transform duration-300 leading-relaxed p-1 mb-1 mr-5"

                                         ><VscChromeClose size={25}></VscChromeClose>

                                         </button>
                                         
                                         </div>
                                         
           
        
               
           

            
           
         
                      {categoryItems.length===0?(
            
           
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className=" text-[#DAF1DE]/60 bg-gradient-to-b from-[#163B32]/30 to-[#051F20]/50 border border-[#10B981]/10 rounded-2xl px-7 py-5">
           <TbShoppingCartOff size={80}></TbShoppingCartOff>
           </div>
           <h2 className=" text-[#DAF1DE]/60 text-xl uppercase font-bold mt-4">Вашият списък с любими е празен</h2>
           <h2 className=" text-gray-300/30 text-sm font-light mt-4 text-center max-w-[250px] leading-relaxed">Все още нямате добавени артикули. Разгледайте нашите актуални предложения.</h2>
           <button type="submit" className='mt-4 w-full max-w-[70%] py-4 rounded-xl hover:bg-[#DAF1DE] hover:text-[#235347] bg-[#10B981]/50 transition-all shadow-[0_4px_25px_rgba(35,83,71,0.5)]  transform cursor-pointer uppercase font-extrabold tracking-tighter text-sm text-[#DAF1DE]'>Разгледай нашите категории</button>
           </div>

           ) : (
            
           
             <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
            
                
                    {categoryItems.map((categoryItem) => (
                        <CategoryItemCard key={categoryItem.id} categoryItem={categoryItem}></CategoryItemCard>
                    ))}
            </div>
            

           )}
            </div>
        </aside>
        </div>  
    )
}

export default CategoryDrawer;