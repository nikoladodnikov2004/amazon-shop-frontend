import type { WishListItemDto } from "./types/wishlist.ts";
import {FiHeart, FiCheck} from "react-icons/fi"
import React, {useState} from "react";
import {TiDelete} from "react-icons/ti"
import {useWishList} from "./context/wishListContext.tsx"

export interface WishListCardProps {
    wishListItem: WishListItemDto;
}

function WishListItemCard({wishListItem}:WishListCardProps){
    const {removeFromWishList}=useWishList();
     
    return(
        <div className="relative bg-gradient-to-b from-[#163B32]/30 to-[#051F20]/50 border border-[#10B981]/30 rounded-2xl p-4">
           
      
            <p className="text-[#DAF1DE] text-xl font-bold tracking-tighter">{wishListItem.name}</p>
            <span className="text-[#10B981]/70 text-sm tracking-tighter font-bold items-center flex gap-1 mt-1"><FiCheck size={16}></FiCheck> Още {wishListItem.stockQuantity} бройки в наличност от този продукт</span>
            <p className="text-gray-300/40 text-md font-semibold tracking-tighter mt-1">{wishListItem.brand}</p>
            
            <div className="flex items-baseline gap-3 ">
            <p className="text-[#DAF1DE] text-xl font-bold tracking-tighter mt-5">{wishListItem.price}.00 €</p>
            <p className="text-md line-through text-[#DAF1DE]/40 mt-2">
                                    1500.00 €
                                </p>
                                </div>
            
            <button className="absolute top-3 right-14 text-gray-300 border border-[#DAF1DE]/10 rounded-full p-2 bg-[#051F20]/80 hover:text-[#10B981] hover:bg-[#051F20]/40 transition-all cursor-pointer">
            <FiHeart size={20} ></FiHeart>
            </button>
            <button type="button" onClick={() => removeFromWishList(wishListItem.id)} className="absolute top-3 right-2 text-gray-300 border border-[#DAF1DE]/10 rounded-full p-2 bg-[#051F20]/80 hover:text-[#10B981] hover:bg-[#051F20]/40 transition-all cursor-pointer">
            <TiDelete size={20} ></TiDelete>
            </button>
            
                        
                
        </div>
    )
}

export default WishListItemCard;