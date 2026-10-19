import type { BestSellerItemDto } from "./types/bestSeller.ts";
import {FiHeart, FiCheck} from "react-icons/fi"
import React, {useState} from "react";
import {TiDelete} from "react-icons/ti"
import {useCart} from "./context/CartContext.tsx"

export interface BestSellerItemCardProps {
    bestSellerItem: BestSellerItemDto;
}

function BestSellerItemCard({bestSellerItem}:BestSellerItemCardProps){
    const [quantity, setQuantity] = useState(1);
    const {removeFromCart}=useCart();
     
    return(
        <div className=" flex relative items-center gap-3 p-3 bg-gradient-to-b from-[#163B32]/30 to-[#051F20]/50 border border-white/10 rounded-2xl">
           <div className="w-20 h-20 rounded-xl bg-[#051F20] border border-[#DAF1DE]/10 overflow-hidden shrink-0 flex items-center justify-center p-1">
            <img 
            src={bestSellerItem.imageUrl}
                alt={bestSellerItem.name}
                className="w-full h-full object-contain"
            />
           </div>

            <div className="flex-1 min-w-0 pr-16">
            <p className="text-[#DAF1DE] text-sm font-bold tracking-tighter ">{bestSellerItem.name}</p>
            <span className="text-[#10B981]/70 text-[11px] tracking-tighter font-bold items-center flex gap-1 mt-0.5"><FiCheck size={14}></FiCheck> Още {bestSellerItem.stockQuantity} бройки в наличност</span>
            <p className="text-gray-300/40 text-[11px] font-semibold tracking-tighter ">{bestSellerItem.brand}</p>
            
            <div className="flex items-baseline gap-2 mt-2">
            <p className="text-[#DAF1DE] text-base font-bold tracking-tighter">{bestSellerItem.price}.00 €</p>
            <p className="text-xs line-through text-[#DAF1DE]/40 ">
                                    1500.00 €
                                </p>
                                </div>
                                </div>
            
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
            <button type="button" className=" text-gray-300 border border-[#DAF1DE]/10 rounded-full p-1.5 bg-[#051F20]/80 hover:text-[#10B981] hover:bg-[#051F20]/40 transition-all cursor-pointer">
            <FiHeart size={15} ></FiHeart>
            </button>
            <button type="button" onClick={() => removeFromCart(bestSellerItem.id)} className=" text-gray-300 border border-[#DAF1DE]/10 rounded-full p-1.5 bg-[#051F20]/80 hover:text-[#10B981] hover:bg-[#051F20]/40 transition-all cursor-pointer">
            <TiDelete size={15} ></TiDelete>
            </button>
            </div>
            
                      
                
        </div>
    )
}

export default BestSellerItemCard;