import React from "react";
import { FiShoppingCart, FiHeart, FiStar } from "react-icons/fi";

const sectionData=[{
    id:'new-arrivals',
    tag:'Нови попълнения',
    title:'Най-нови Продукти',
    products:[
        {
        id:101,
        name:'Експресо машина Niesa Elite',
        category:'Кафемашини',
        price:'899.00',
        oldPrice:'1050.00',
        badge:'HOT',
        image:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=600'
    },
    {
        id:102,
        name:'Експресо машина Niesa Elite',
        category:'Кафемашини',
        price:'899.00',
        oldPrice:'1050.00',
        badge:'HOT',
        image:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=600'
    },
    {
        id:103,
        name:'Експресо машина Niesa Elite',
        category:'Кафемашини',
        price:'899.00',
        oldPrice:'1050.00',
        badge:'HOT',
        image:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=600'
    },
    {
        id:104,
        name:'Експресо машина Niesa Elite',
        category:'Кафемашини',
        price:'899.00',
        oldPrice:'1050.00',
        badge:'HOT',
        image:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=600'
    },
]
},
{
   id:'vacuums',
    tag:'Смарт почистване',
    title:'Роботи & Прахосмукачки',
    products:[{
        id: 201,
        name: 'Робот Прахосмукачка Niesa S9 Pro',
        category: 'Умен дом',
        price: '799.00',
        oldPrice: '920.00',
        badge:'TOP',
        image:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 202,
        name: 'Робот Прахосмукачка Niesa S9 Pro',
        category: 'Умен дом',
        price: '799.00',
        oldPrice: '920.00',
        badge:'TOP',
        image:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 203,
        name: 'Робот Прахосмукачка Niesa S9 Pro',
        category: 'Умен дом',
        price: '799.00',
        oldPrice: '920.00',
        badge:'TOP',
        image:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 204,
        name: 'Робот Прахосмукачка Niesa S9 Pro',
        category: 'Умен дом',
        price: '799.00',
        oldPrice: '920.00',
        badge:'TOP',
        image:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=600'
    }
] 
}
];

function ProductSection(){
    return(
        <div className="w-full bg-[#051F20] py-8 px-4">
            {sectionData.map((section)=>(
                <section key={section.id} className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-center flex flex-col items-centerw-full">
                        <span className="text-sm text-[#10B981] font-bold uppercase tracking-widest">
                            {section.tag}
                        </span>
                        <div className="flex items-center justify-center gap-2">
                            <h2 className="text-2xl text-[#DAF1DE] font-extrabold tracking-wide mt-1 uppercase">
                                {section.title}
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                        {section.products.map((product)=>(
                            <div key={product.id} className="bg-[#051F20] border border-[#163B32] rounded-2xl shadow-md p-4 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all duration-300">
                                <div className="relative w-full h-52 rounded-xl bg-[#235347]/30 flex items-center justify-center">
                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg"/>
                                    {product.badge &&(
                                        <span className="font-niesa absolute top-3 left-3 bg-[#10B981] text-[#051F20] text-[20px] font-bold uppercase trackind-wider px-2.5 py-1 rounded-md shadow-md">
                                            {product.badge}
                                        </span>
                                    )}
                                    <button className="absolute top-3 right-3 w-8 h-8 backdrop-blur-md rounded-full bg-[#051F20]/70 flex items-center justify-center">
                                        <FiHeart className="text-[#DAF1DE] hover:text-[#10B981] transition-colors duration-300 size-4"/>
                                    </button>
                                </div>

                                <div className="flex flex-col flex-1 justify-between">
                                    <div>
                                        <div className="flex items-center justify-center text-xs text-[#DAF1DE]/50 mb-1">
                                            <span>{product.category}</span>
                                            
                                        </div>
                                    </div>
                                    <h3 className="text-[#DAF1DE] flex items-center justify-center mb-4">
                                        {product.name}
                                    </h3>
                                </div>
                                    
                                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#DAF1DE]/10">
                                        <div>
                                            {product.oldPrice && (
                                            <span className="line-through text-xs text-[#DAF1DE]/40">
                                                {product.oldPrice}
                                            </span>
                                            )}
                                            <span className="text-lg font-bold text-[#10B981]">
                                                {product.price}
                                            </span>
                                        </div>

                                        <button>
                                            <FiShoppingCart className="size-5"></FiShoppingCart>
                                        </button>
                                    </div>

                                    

                            </div>
                        ))}
                    </div>
                </section>
            ))}
          </div>  
    );
}
export default ProductSection;