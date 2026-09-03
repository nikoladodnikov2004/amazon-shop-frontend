import React from 'react';
import { FiCoffee, FiCpu, FiHome, FiSliders } from 'react-icons/fi';

const categories =[
    {id:1, name:"Кафе култура" , icon: FiCoffee},
    {id:2, name:"Умен дом" , icon: FiCpu},
    {id:3, name:"Домашни уреди" , icon: FiHome},
    {id:4, name:"Аксесоари" , icon: FiSliders},
];

function CategorySection(){
    return(
        
        <div className="w-full h-full bg-[#051F20] flex items-center justify-center gap-10">
            {categories.map((cat) =>{
            const Icon =cat.icon;
        
        return (
        <div
            key={cat.id}
             className='bg-transparent border border-[#DAF1DE]/30 px-20 py-20 rounded-lg my-20 shadow-md flex flex-col items-center justify-center'
         >
           
           <div className='bg-[#235347] px-3 py-3 rounded-lg border border-[#DAF1DE]/30'>
            <Icon className='text-[#DAF1DE] size-10'></Icon>
           </div>
           
            <span className='text-[#DAF1DE]'>
                {cat.name}
            </span>

        </div>
        );
        })}
      </div>  
    );
}
export default CategorySection;