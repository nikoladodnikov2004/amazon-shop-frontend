import React, {useState} from "react";
import {useParams, Link} from "react-router-dom";
import {sectionData} from "../data/productData";
import {FiShoppingBag, FiHeart, FiArrowLeft, FiChevronLeft, FiChevronRight, FiCheck, FiTruck, FiBox} from "react-icons/fi" 
import { FiTag, FiHash, FiZap,  FiShield,  FiInfo, FiClock,  FiDroplet,  FiCpu, FiPackage, FiLayers, FiDisc,FiSliders, FiEdit2, FiX, FiSave } from "react-icons/fi"
import ProductCard from"./ProductCard";
import ReviewSection from '../ReviewSection.tsx'

function ProductDetailsPage(){
    
    const {id} = useParams<{id:string}>();
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked]=useState(false);
    const [isEditing, setIsEditing]=useState(false);
    const [isAddNewProduct, setIsAddNewProduct]=useState(false);
    const [selectedImage, setSelectedImage]= useState(0);
    const [formData, setFormData] = useState<any>({});
    const isInputMode = isEditing || isAddNewProduct;
    const STATUS_AVAILABLE = 'В наличност';
    const STATUS_NOT_AVAILABLE = 'Няма в наличност';
    const STATUS_COMING_SOON = 'Очаквайте скоро';
    const[availabilityStatus, setAvailabilityStatus]=useState(STATUS_AVAILABLE)


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
    


const handleChange= (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value}));

};

const handleFeatureChange = (index: number, value:string) => {
    const updatedFeatures = [...(formData.features || [])]
    updatedFeatures[index]= value;
    handleChange('features', updatedFeatures);
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
                            <div className="flex items-center">
                        <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider">
                            {product.category}
                        </span>
                                
                            <div className="ml-4 text-gray-300 rounded-2xl">
                                {!isEditing? (
                        <button
                        
            onClick={() => {
            
                setFormData({ ...product }); 
                setIsEditing(true);
                
            }}
            className=" text-white font-bold py-2 px-4 rounded-xl"
            >
            <FiEdit2 size={20} className="hover:text-yellow-400 transition-colors duration-300"></FiEdit2>
            </button>

                ):(
                    <>
            <button
            onClick={() => {
            
                
                setIsEditing(false);
            }}
            className=" text-white font-bold py-2 px-4 rounded-xl "
            >
            <FiX size={20} className="hover:text-red-600 transition-colors duration-300"></FiX>
            </button>

            <button
            onClick={() => {
            
                
                setIsEditing(false);
            }}
            className=" text-white font-bold py-2 px-4 rounded-xl "
            >
            <FiSave size={20} className="hover:text-green-600 transition-colors duration-300"></FiSave>
            </button>
                </>
                )}
            </div>
            </div>
        



                        
                            <div className="mb-4 flex gap-3">
                                
  
</div>

                        {isInputMode ? (
                            <input
                            type="text"
                            value={formData.name || ''}
                            onChange={(e) =>handleChange('name', e.target.value)}
                            className="w-full p-0 bg-transparent text-3xl font-extrabold text-[#DAF1DE] rounded-sm outline-none focus:border-[#10B981]"    
                            placeholder= "Име на продукта"
                            />
                        ) : (
                            
                        <h1 className="text-3xl font-extrabold text-[#DAF1DE] mt-2">
                            {product.name}
                        </h1>
                        )}

                        {isInputMode ? (
                            <input
                            type="text"
                            value={formData.brand || ''}
                            onChange={(e) =>handleChange('brand', e.target.value)}
                            className=" w-full bg-transparent text-sm font-extrabold text-[#DAF1DE] rounded-sm p-0 mt-5 outline-none focus:border-[#10B981]"    
                            placeholder= "Име на марката"
                            />
                        ) : (
                        <h1 className="text-sm font-extrabold text-[#DAF1DE] mt-5">
                           Марка: {product.brand}
                        </h1>
                        )}

                        {isInputMode ? (
                            <input
                            type="text"
                            value={formData.serialNumber || ''}
                            onChange={(e) =>handleChange('serialNumber', e.target.value)}
                            className="w-full bg-transparent  text-sm font-extrabold text-[#DAF1DE] rounded-sm p-0 mt-2 outline-none focus:border-[#10B981]"    
                            placeholder= "Сериен номер"
                            />
                        ) : (
                        <h1 className="text-sm font-extrabold text-[#DAF1DE] mt-2">
                           Сериен номер: {product.serialNumber}
                        </h1>
                        )}

                        {isInputMode ? (
                            <input
                            type="text"
                            value={formData.condition || ''}
                            onChange={(e) =>handleChange('condition', e.target.value)}
                            className=" w-full bg-transparent  text-sm font-extrabold text-[#DAF1DE] rounded-sm p-0 mt-2 outline-none focus:border-[#10B981]"    
                            placeholder= "Състояние на продукта"
                            />
                        ) : (
                        <h1 className="text-sm font-extrabold text-[#DAF1DE] mt-2">
                           Състояние на продукта: {product.condition}
                        </h1>
                        )}
                        
                        
                        <div className="my-2 mt-5">
                            <span className="font-semibold text-gray-200 block mb-1">Характеристики:</span>
                            <div className="flex flex-col gap-1">
                                {product.features?.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
                                        <span className="text-emerald-400 font-bold">•</span>
                                        
                                        
                                        {isInputMode ? (
                            <input
                            type="text"
                            value={formData.features?.[index] ?? feature ?? ''}
                            onChange={(e) =>handleFeatureChange(index, e.target.value)}
                            className=" w-full bg-transparent text-sm text-gray-200 rounded-sm p-0 outline-none focus:border-[#10B981]"    
                            placeholder= "Характеристика на продукта"
                            />
                        ) : (
                                        <span>{feature}</span>
                        )}
                            </div>
                                ))}
                        </div>
                        </div>
                        
                            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                                
                        <div className="flex items-center gap-8 mt-4 text-sm">
                            
                            {isInputMode ? (
                            <span className="text-[#10B981] flex items-center gap-1">
                                <div className="rounded-2xl items-center flex gap-2  px-2 py-2">
                                    <button
                                type="button"
                                title={STATUS_AVAILABLE}
                                onClick={() => handleChange('availability', STATUS_AVAILABLE)}
                                className={`p-1.5 rounded-lg transition-all ${
                                    formData.availability === STATUS_AVAILABLE
                                    ? 'bg-[#10B981] text-white shadow'
                                    : 'text-gray-400 hover:text-[#10B981]'
                                }`}
                                >
                                <FiCheck size={16} />
                                </button>
                                <button
                                type="button"
                                title={STATUS_NOT_AVAILABLE}
                                onClick={() => handleChange('availability', STATUS_NOT_AVAILABLE)}
                                className={`p-1.5 rounded-lg transition-all ${
                                    formData.availability === STATUS_NOT_AVAILABLE
                                    ? 'bg-red-500 text-white shadow'
                                    : 'text-gray-400 hover:text-red-500'
                                }`}
                                >
                                 <FiX  size={16}></FiX>
                                 </button>
                                 <button
                                type="button"
                                title={STATUS_COMING_SOON}
                                onClick={() => handleChange('availability', STATUS_COMING_SOON)}
                                className={`p-1.5 rounded-lg transition-all ${
                                    formData.availability === STATUS_COMING_SOON
                                    ? 'bg-amber-500 text-white shadow'
                                    : 'text-gray-400 hover:text-amber-400'
                                    
                                }`}

                                
                                >
                                 <FiClock size={16}></FiClock>
                                 </button>
                                 </div>
                                
                                
                            <input
                            type="text"
                            value={formData.availability || ''}
                            onChange={(e) =>handleChange('availability', e.target.value)}
                            className={`bg-transparent  text-sm rounded-sm p-0 outline-none focus:border-[#10B981] ${    
                            formData.availability === STATUS_NOT_AVAILABLE
                            ? 'text-red-400'
                            : formData.availability === STATUS_COMING_SOON
                            ? 'text-amber-400'
                            : 'text-[#10B981]'
                            }`}
                            placeholder= "Наличност"
                            />
                            </span>
                        ) : (
                            <span className="text-[#10B981] flex items-center gap-1">
                                <FiCheck size={16}></FiCheck>
                                {product.availability}
                                
                            </span>
                        )}
                         
                            
                            {isInputMode ? (
                                <span className="text-[#DAF1DE] flex items-center gap-1">
                                <FiTruck size={16}></FiTruck>
                                
                            <input
                            type="text"
                            value={formData.dateDelivery || ''}
                            onChange={(e) =>handleChange('dateDelivery', e.target.value)}
                            className=" bg-transparent  text-sm text-[#DAF1DE] rounded-sm p-0 outline-none focus:border-[#10B981]"    
                            placeholder= "Доставка"
                            />
                            </span>
                        ) : (
                            <span className="text-[#DAF1DE] flex items-center gap-1">
                                <FiTruck size={16}></FiTruck>
                                 {product.dateDelivery}
                            </span>
                        )}
                            
                        </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-sm text-[#DAF1DE]/35 tracking-wide ">Датата на доставка е ориентировъчна и зависи от населеното място и от избраната куриерска фирма. 
                                Точната дата, на която продуктът ще е при теб, както и финалната цена на доставка 
                                можеш да разбереш при завършване на поръчката.</p>
                            </div>

                                {isInputMode ? (
                            
                            <div className="mt-8 flex items-center justify-center gap-1 text-[#163B32] font-extrabold bg-[#DAF1DE] rounded-full px-2 py-2 shadow-md">
                                <FiBox size={26}></FiBox>
                                <span className=" font-md text-[#163B32]">Още</span>
                                <input
                            type="text"
                            value={formData.inStock || ''}
                            onChange={(e) =>handleChange('inStock', e.target.value)}
                            className=" bg-transparent font-extrabold text-center rounded-xl p-0 outline-none focus:border-[#10B981] w-[3.5%]"    
                            
                            />
                            <span className=" text-[#163B32] font-extrabold">броя налични в нашия склад</span>
  </div>
                        ) : (
                                <div className="mt-8 flex items-center justify-center gap-1 text-[#163B32] font-extrabold bg-[#DAF1DE] rounded-full px-2 py-2 shadow-md">
                                <FiBox size={26}></FiBox>
                                <span>Още {product.inStock} броя налични в нашия склад</span>
                        
                            </div>
                            )}
                        
                            
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
            <h1 className="text-3xl  font-extrabold text-[#DAF1DE] text-center uppercase mt-40">
                            Пълно описание на продукта
            </h1>

                 <div className="mt-10 text-center">
                    {isInputMode ? (
                            <input
                            type="text"
                            value={formData.inStock || ''}
                            onChange={(e) =>handleChange('inStock', e.target.value)}
                            className="text-base leading-relaxed text-gray-300 font-light max-w-4xl mx-auto bg-[#163B32]/20 border border-[#DAF1DE]/15 rounded-3xl p-8 backdrop-blur-md shadow-xl text-center"    
                            placeholder= "Описание"
                            />
                        ) : (
            <p className="text-base leading-relaxed text-gray-300 font-light max-w-4xl mx-auto bg-[#163B32]/20 border border-[#DAF1DE]/15 rounded-3xl p-8 backdrop-blur-md shadow-xl text-center">
                            {product.description}
                        </p>
                        )}
                 </div>

                 <div className="mt-32 ">
                    
            <h1 className="text-3xl font-extrabold text-[#DAF1DE] text-center uppercase mb-8">
                            Всички характеристики на продукта
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto ">
            {product.specifications?.map((spec, index) => (
                <div 
                key={index} 
                className="bg-[#163B32]/30 border border-[#DAF1DE]/15 hover:border-[#DAF1DE]/40 rounded-2xl px-6 py-4 flex items-center justify-between backdrop-blur-md transition-all"
                >

                    <div className="flex items-center gap-3 text-[#DAF1DE]/70 transition-colors">
                <span className="p-2 rounded-xl  bg-[#051F20]/50 border border-[#DAF1DE]/10 text-[#10B981]">
                    {renderIcon(spec.icon)}
                    
                </span>
                <span className="uppercase tracking-wide font-semibold text-xs text-gray-300">
                    {spec.label}
                    </span>
                </div>

                <span className="font-bold text-sm text-[#DAF1DE]">
                    {spec.value}
                </span>
                </div>
            ))}
            </div>
            </div>


            <h1 className="text-3xl font-extrabold text-[#DAF1DE] text-center uppercase mt-40 ">
                            Разгледайте още подобни продукти
            </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            
            {relatedProducts.map((prod) =>(
                <ProductCard key={prod.id} product={prod}></ProductCard>
            ))}
        </div>


            <ReviewSection productId={product.id}/>

        </div>

        </div>
    )
}

export default ProductDetailsPage;




