import React from "react";
import { FiShoppingCart, FiHeart, FiStar, FiEdit2, FiTrash2 } from "react-icons/fi";
import { sectionData } from "./data/productData";
import ProductCard from "./pages/ProductCard";




function ProductSection() {
    return (
        <div className="w-full bg-[#051F20] py-8 px-4">
            {sectionData.map((section) => (
                <section key={section.id} className="max-w-7xl mx-auto flex flex-col items-center ">

                    <div className="text-center flex flex-col items-center w-full my-2">
                        <span className="text-sm text-[#10B981] font-bold uppercase tracking-widest mt-12">
                            {section.tag}
                        </span>
                        <div className="flex items-center justify-center gap-2">
                            <h2 className="text-2xl text-[#DAF1DE] font-extrabold tracking-wide mt-1 uppercase">
                                {section.title}
                            </h2>
                        </div>
                        <button className="mt-4 rounded-full text-[#DAF1DE] bg-[#10B981] p-4 uppercase font-extrabold tracking-tighter">Добави продукт</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                        {section.products.map((product) => (
                            <ProductCard key={product.id} product={product} />





                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
export default ProductSection;