import React from 'react';
import { FiCoffee, FiCpu, FiHome, FiSliders,FiActivity } from 'react-icons/fi';
import './App.css';

const categories =[
    {id:1, name:"Кафе култура" , count:"Над 185 продукта", badge:"New", icon: FiCoffee},
    {id:2, name:"Умен дом", count:"45+ нови продукта" ,badge:"New", icon: FiCpu},
    {id:3, name:"Домашни уреди", count:"10 продукта" ,badge:"New", icon: FiHome},
    {id:4, name:"Аксесоари",count:"22 продукта" ,badge:"New", icon: FiSliders},
    {id:5, name:"Медицинска стока",count:"38+ нови продукта" ,badge:"New", icon: FiActivity},
];

function CategorySection(){
    
    return(
        
        
        <div className="w-full bg-[#051F20] py-12 flex flex-col items-center justify-center gap-10">
            <div className=' text-center'>
                <h1 className='text-2xl text-[#DAF1DE] font-extrabold tracking-wide mt-1 uppercase'>
                    Новите ни категории
                </h1>
            </div>
            
        <div className="flex items-center justify-center gap-8 flex-wrap px-4">
            {categories.map((cat) =>{
            const Icon =cat.icon;
        return (
            
            
        <div
        
            key={cat.id}
            
             className='relative group w-64 h-56 bg-transparent border border-[#DAF1DE]/30 rounded-2xl shadow-md flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-[#10B981] transition-all duration-300 hover:-translate-y-1.5'
            
         >
            {cat.badge&&
            <span className='font-niesa absolute -top-2.5 -right-2.5  bg-[#10B981] text-[#DAF1DE] uppercase px-3 py-2.5 rounded-3xl'>{cat.badge}</span>
            }
           
           <div className='bg-[#235347] p-4 rounded-lg border border-[#DAF1DE]/30 group-hover:bg-[#DAF1DE] transition-all duration-300'>
            <Icon className='text-[#DAF1DE] size-8 group-hover:text-[#235347] transition-all duration-300'></Icon>
           </div>
           
            <span className='text-[#DAF1DE] text-center font-medium text-sm tracking-wide group-hover:text-[#10B981] transition-colors'>
                {cat.name}
            </span>

            <span className='text-[#DAF1DE]/55 text-center font-medium text-sm tracking-wide group-hover:text-[#10B981]/55 transition-colors'>
                {cat.count}
            </span>

        </div>
        
        );
        })}
      </div>  

      </div>
    );
}
export default CategorySection;