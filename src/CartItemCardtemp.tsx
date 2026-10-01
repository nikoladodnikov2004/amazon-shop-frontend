import type { CartItemDto } from "./types/cart.ts";
import {FiHeart} from "react-icons/fi"
import React, {useState} from "react";


export interface CartItemCardProps {
    cartItem: CartItemDto;
}

function CartItemCard({cartItem}:CartItemCardProps){
    const [quantity, setQuantity] = useState(1);
    return(
        <div className="relative bg-gradient-to-b from-[#163B32]/30 to-[#051F20]/50 border border-[#10B981]/40 rounded-2xl px-4 py-4">
            
            <p className="text-[#DAF1DE] text-xl font-bold tracking-tighter">{cartItem.brand}</p>
            <p className="text-[#DAF1DE] text-xl font-bold tracking-tighter mt-5">{cartItem.price}</p>
            <FiHeart size={20} className="absolute top-4 right-4 text-gray-300"></FiHeart>
            
                        <div className="absolute bottom-1 right-1 flex items-center px-4 py-3 gap-4 ">
            <button
                                onClick={() =>setQuantity((q) =>Math.max(1,q-1))
                                    
                                }
                                className="font-bold text-lg hover:text-[#10B981] text-[#DAF1DE]"
                                >
                                    -
                            </button>
                            <span className="font-bold text-[#DAF1DE]">{quantity}</span>
                            <button
                                disabled={cartItem.stockQuantity<=quantity}
                                onClick={() =>setQuantity((q) =>q+1)}
                                className="font-bold text-lg hover:text-[#10B981] disabled:opacity-30 disabled:cursor-not-allowed text-[#DAF1DE]"
                                >
                                    +
                                    </button>
                                    
                                    </div>
        </div>
    )
}

export default CartItemCard;