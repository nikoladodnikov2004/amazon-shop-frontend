import React from "react";
import {FiShoppingCart, FiHeart, FiEdit2, FiTrash2} from "react-icons/fi";
import {Link} from "react-router-dom";
import {useCart} from "../context/CartContext";

export interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    oldPrice: string | null;
    badge: string | null;
    image: string;
}

interface ProductCardProps {
    product: Product;
}
function ProductCard({ product }: ProductCardProps) {

    const {addToCart} = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Добавяне на продукт ID:", product.id);
        addToCart(2);
    };
    
    return (
        <Link to={`/product/${product.id}`} className="block w-full">
        <div className="group bg-[#051F20] border border-[#163B32] hover:border-[#10B981] hover:-translate-y-1.5 rounded-2xl shadow-md p-4 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all duration-300">
            <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4 bg-[#235347]/30 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" />
                {product.badge && (
                    <span className="font-niesa absolute top-3 left-3 bg-[#10B981] text-[#DAF1DE] text-[20px] font-bold uppercase trackind-wider px-2.5 py-1 rounded-md shadow-md">
                        {product.badge}
                    </span>
                )}
                <button className="group absolute top-3 right-3 w-8 h-8 backdrop-blur-md rounded-full bg-[#051F20]/70 flex items-center justify-center hover:text-[#10B981] transition-colors duration-300">
                    <FiHeart className="text-[#DAF1DE] hover:text-[#10B981] hover:fill-[#10B981] transition-colors duration-300 size-4" />
                </button>
                <button className="group absolute bottom-3 right-12 w-8 h-8 backdrop-blur-md rounded-full bg-[#051F20]/70 flex items-center justify-center hover:text-[#10B981] transition-colors duration-300">
                    <FiEdit2 className="text-[#DAF1DE] hover:text-[#10B981]  transition-colors duration-300 size-4" />
                </button>
                <button className="group absolute bottom-3 right-3 w-8 h-8 backdrop-blur-md rounded-full bg-[#051F20]/70 flex items-center justify-center hover:text-[#10B981] transition-colors duration-300">
                    <FiTrash2 className="text-[#DAF1DE] hover:text-[#10B981]  transition-colors duration-300 size-4" />
                </button>
            </div>
            <div className="flex flex-col flex-1 justify-between">
                <div>
                    <div className="flex items-center justify-between text-xs text-[#DAF1DE]/50 mb-1">
                        <span>{product.category}</span>
                    </div>
                </div>
                <h3 className="text-[#DAF1DE] font-semibold text-base flex items-center justify-center mb-3 line-clamp-2 group-hover:text-[#10B981] transition-colors">
                    {product.name}
                </h3>


                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#DAF1DE]/10">
                    <div className="flex flex-col">
                        {product.oldPrice && (
                            <span className="line-through text-xs text-[#DAF1DE]/40">
                                {product.oldPrice}
                            </span>
                        )}
                        <span className="text-lg font-bold text-[#10B981]">
                            {product.price}
                        </span>
                    </div>

                    <button type="button" onClick={handleAddToCart} className="bg-[#235347] hover:bg-[#10B981] text-[#DAF1DE] hover:text-[#051F20] p-2.5 rounded-xl border border-[#DAF1DE]/30 transition-all duration-300 flex items-center justify-center">
                        <FiShoppingCart className="size-5"></FiShoppingCart>
                    </button>
                </div>

            </div>
        </div>
        </Link>
    )
}

export default ProductCard;
