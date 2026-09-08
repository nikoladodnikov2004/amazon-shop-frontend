import React, {useState} from "react";
import {useParams, Link} from "react-router-dom";
import {sectionData} from "../data/productData";
import {FiShoppingBag, FiHeart, FiArrowLeft, FiChevronLeft, FiChevronRight, FiCheck, FiTruck, FiBox} from "react-icons/fi" 
import { FiTag, FiHash, FiZap,  FiShield,  FiInfo, FiClock,  FiDroplet,  FiCpu, FiPackage, FiLayers, FiDisc,FiSliders  } from "react-icons/fi"
import ProductCard from"./ProductCard";

function ProductDetailsPage(){
    const {id} = useParams<{id:string}>();
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked]=useState(false);

    const [selectedImage, setSelectedImage]= useState(0);
    
    const renderIcon=(iconName?: string)=>
    {
        switch(iconName){
        case "tag":return<FiTag size={20}></FiTag>
        case "zap":return<FiZap size={20}></FiZap>
        case "shield":return<FiShield size={20}></FiShield>
        case "layers":return<FiLayers size={20}></FiLayers>
        case "gauge":return<FiInfo size={20}></FiInfo>
        case "droplet":return<FiDroplet size={20}></FiDroplet>
        case "cpu":return<FiCpu size={20}></FiCpu>
        case "clock":return<FiClock size={20}></FiClock>
        case "disc":return<FiDisc size={20}></FiDisc>
        case "box":return<FiBox size={20}></FiBox>
        case "package":return<FiPackage size={20}></FiPackage>
        case "hash":return<FiHash size={20}></FiHash>
    }
};
    

    


    const allProducts =sectionData
    .flatMap((section) => section.products)
    
    const product=allProducts.find((p) => p.id ===Number(id));
     
    const relatedProducts=allProducts
        .filter((item) => item.category === product?.category && item.id !== product?.id)
        .slice(0,4);



    if(!product){
        return (
            <div className="min-h-[70vh] bg-[#051F20] flex flex-col items-center justify-center text-[#DAF1DE] px-4">
                <h2 className="text-3xl font-bold mb-4">Продуктът не е намерен</h2>
                <p>Възможно е продуктът да е премахнат или линкът да е грешен.</p>
                <Link
                to="/"
                className="bg-[#10B981] text-[#051F20] font-bold px-6 py-3 rounded-xl hover:bg-[#235347] hover:text-[#DAF1DE] transition-all">
                Върни се към каталога
                </Link>
            </div>
        );

    }

    
        
    

    return (

        
        <div className="min-h-screen bg-[#051F20] text-[#DAF1DE] py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#DAF1DE]/60 hover:text-[#10B981] transition-colors mb-8 text-sm font-medium">
                    <FiArrowLeft/>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-20">
                    <div className="flex flex-col gap-4">
                <div className="relative group rounded-3xl overflow-hidden bg-[#163B32]/30 border border-[#163B32] p-4 ">
                    <img
                        src={product.images?.[selectedImage]}
                        alt={product.name}
                        className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl">

                        </img>
                        
                        <button 
                        onClick={() =>setIsLiked(!isLiked)}
                        className="absolute top-8 right-8 w-11 h-11 backdrop-blur-md rounded-full bg-[#051F20]/70 flex items-center justify-center hover:text-[#10B981] transition-colors duration-300">
                            <FiHeart className="text-[#DAF1DE] hover:text-[#10B981] hover:fill-[#10B981] transition-colors duration-300 size-4" />
                        </button>
                    {product.badge && (
                        <span className="font-niesa text-center text-[#DAF1DE] absolute w-16 top-8 left-8 bg-[#10B981] text-[#051F20] text-2xl rounded-full shadow-md font-bold uppercase ">{product.badge}</span>
                    )}
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 flex items-center justify-center">
                    
                    <button
                    disabled={selectedImage=== 0}
                    onClick={()=> setSelectedImage((i) =>Math.max(0,i-1))}
                    className="bg-[#DAF1DE] text-[#163B32] rounded-md shadow-md cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                    <FiChevronLeft size={30}></FiChevronLeft>
                    </button>
                            {product.images?.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                                        selectedImage === index
                                            ? "border-[#10B981] opacity-100 scale-95"
                                            : "border-[#163B32] opacity-60 hover:opacity-100"
                                    }`}
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                                            <button
                    disabled={selectedImage === (product.images?.length ?? 1) - 1}
                    onClick={() => setSelectedImage((i) => i + 1)}
                    className="bg-[#DAF1DE] text-[#163B32] rounded-md shadow-md cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <FiChevronRight size={30} />
                </button>
                        </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <div>

                        <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider">
                            {product.category}
                        </span>
                        
                        <h1 className="text-3xl font-extrabold text-[#DAF1DE] mt-2">
                            {product.name}
                        </h1>
                        <h1 className="text-sm font-extrabold text-[#DAF1DE] mt-5">
                           Марка: {product.brand}
                        </h1>
                        <h1 className="text-sm font-extrabold text-[#DAF1DE] mt-2">
                           Сериен номер: {product.serialNumber}
                        </h1>
                        <h1 className="text-sm font-extrabold text-[#DAF1DE] mt-2">
                           Състояние на продукта: {product.condition}
                        </h1>
                        
                        
                        <div className="my-2 mt-5">
                            <span className="font-semibold text-gray-200 block mb-1">Характеристики:</span>
                            <div className="flex flex-col gap-1">
                                {product.features?.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
                                        <span className="text-emerald-400 font-bold">•</span>
                                        <span>{feature}</span>
                            </div>
                                ))}
                        </div>
                        </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                        <div className="flex items-center gap-8 mt-4 text-sm">
                            <span className="text-[#10B981] flex items-center gap-1">
                                <FiCheck size={16}></FiCheck>
                                В наличност
                            </span>
                            <span className="text-[#DAF1DE] flex items-center gap-1">
                                <FiTruck size={16}></FiTruck>
                                 {product.dateDelivery}
                            </span>
                            
                        </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-sm text-[#DAF1DE]/35 tracking-wide ">Датата на доставка е ориентировъчна и зависи от населеното място и от избраната куриерска фирма. 
                                Точната дата, на която продуктът ще е при теб, както и финалната цена на доставка 
                                можеш да разбереш при завършване на поръчката.</p>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-1 text-[#163B32] font-extrabold bg-[#DAF1DE] rounded-full px-2 py-2 shadow-md">
                                <FiBox size={26}></FiBox>
                                <span>Още {product.inStock} броя налични в нашия склад</span>
                            </div>
                            
                        <div className="flex items-baseline gap-4 mt-6">
                            <span className="text-3xl font-extrabold text-[#DAF1DE]">
                                {product.price}
                            </span>
                            {product.oldPrice && (
                                <span className="text-lg line-through text-[#DAF1DE]/40">
                                    {product.oldPrice}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-[#163B32]">
                        <div className="flex items-center border border-[#163B32] bg-[#163B32]/20 rounded-xl px-4 py-3 gap-4">
                            <button
                                onClick={() =>setQuantity((q) =>Math.max(1,q-1))
                                    
                                }
                                className="font-bold text-lg hover:text-[#10B981]"
                                >
                                    -
                            </button>
                            <span className="font-bold">{quantity}</span>
                            <button
                                disabled={product.inStock<=quantity}
                                onClick={() =>setQuantity((q) =>q+1)}
                                className="font-bold text-lg hover:text-[#10B981] disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    +
                                    </button>
                                   
                        </div>

                        <button className="flex-1 bg-[#10B981] hover:bg-[#235347] text-[#051F20] hover:text-[#DAF1DE] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                            <FiShoppingBag size={20}></FiShoppingBag>
                            Купи ({quantity})
                            
                        </button>
                    </div>
                    
                </div>
                
            </div>
            <h1 className="text-3xl font-extrabold text-[#DAF1DE] text-center uppercase mt-40 pt-10 border-t border-[#DAF1DE]/25">
                            Пълно описание на продукта
            </h1>
            <p className="text-md text-gray-300 mt-10">
                            {product.description}
                        </p>
            
            <h1 className="text-3xl font-extrabold text-[#DAF1DE] text-center uppercase mt-20 pt-10 border-t border-[#DAF1DE]/25">
                            Всички характеристики на продукта
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
            {product.specifications?.map((spec, index) => (
                <div 
                key={index} 
                className="bg-[#235347] rounded-full px-6 py-3 flex items-center justify-between text-white border border-[#DAF1DE]/20 hover:border-[#DAF1DE]/60 transition-all"
                >
                <div className="flex items-center gap-2">
                    {renderIcon(spec.icon)}
                    <span className="uppercase tracking-wide font-extrabold text-sm">
                    {spec.label}
                    </span>
                </div>

                <span className="font-medium text-sm text-[#DAF1DE]">
                    {spec.value}
                </span>
                </div>
            ))}
            </div>


            <h1 className="text-3xl font-extrabold text-[#DAF1DE] text-center uppercase mt-20 pt-10 border-t border-[#DAF1DE]/25">
                            Разгледайте още подобни продукти
            </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            
            {relatedProducts.map((prod) =>(
                <ProductCard key={prod.id} product={prod}></ProductCard>
            ))}
        </div>




        </div>

        </div>
    )
}

export default ProductDetailsPage;




