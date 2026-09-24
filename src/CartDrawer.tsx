import {useState} from "react";
import {TiDelete} from "react-icons/ti";

interface CartDrawerProps {
    isOpen:boolean;
    onClose: () => void;
    cartItems?: any[];
    onRemoveFromCart?: (id:number) => void;
}

function CartDrawer ({isOpen, onClose, cartItems =[], onRemoveFromCart}:CartDrawerProps){

    
    const totalPrice = cartItems.reduce((acc,item) => acc + (item.price * (item.quantity || 1)), 0);



    return(
        <div className = {`fixed inset-0 z-[999] transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}>
        <aside className={`fixed top-0 right-0 h-full w-[85%] sm:w-[450px] bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
        }`}>

         <button
                                         type="button"
                                         onClick={() =>onClose()}
                                         className=" ml-2 text-red-400 cursor-pointer"
                                         ><TiDelete size={30}></TiDelete>
                                         </button>  
        </aside>
        </div>
        
    )
}

export default CartDrawer;