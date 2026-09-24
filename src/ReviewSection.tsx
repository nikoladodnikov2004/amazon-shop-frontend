import {FiStar} from "react-icons/fi";
import { useState, useEffect } from 'react';
import {TiDelete} from "react-icons/ti";
import ReviewCard from "./ReviewCard";
import {useAuth} from "./context/AuthContext";
import api from "./api/axios";

interface Review{
        id:string;
        productId:string;
        rating:number;
        comment:string;
        createdAt:string;
     }
interface ReviewSectionProps{
    productId: string | number;
}
function ReviewSection({productId}: ReviewSectionProps){
     const { user, token, isAuthenticated } = useAuth();
    const numericProductId = Number(productId);

    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading]=useState<boolean>(true);
    const [comment, setComment]=useState('');   
    const [rating, setRating]=useState<number>(0);  

    useEffect(() => {
        api.get(`/Review?productId=${numericProductId}`)
        
        .then((res) => {
            setReviews(res.data);
            setLoading(false);
        })
    
    .catch((err) => {
        console.error("Грешка при зареждане на отзивите:", err);
        setLoading(false);
    });
}, [numericProductId]);

     
      
const handleDelete = (id: string) => {
    api.delete(`/Review/${id}`, {
        headers: {
            Authorization:`Bearer ${token}`
        }
    })
    .then(() => {
        
        setReviews((prev) => prev.filter((review) => review.id !== id));
        
    })
    .catch((err) => console.error("Грешка при изтриване:", err));
     
};
    const totalReviews=reviews.length;

    const getRatingPercentage =(starRating: number) => {
        if(totalReviews === 0) return 0;
        const count = reviews.filter((r) => r.rating ===starRating).length;
        return Math.round((count/totalReviews)*100);

    };

    const averageRating = totalReviews > 0
        ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1)
        : "0.0";

   

    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault();

        if(!isAuthenticated){
            alert("Трябва да сте влезли в профила си, за да оставите отзив!");
            return;
        }

        if(rating===0){
            alert("Моля, изберете оценка от 1 до 5 звезди.");
            return;
        }

        if(!comment.trim()){
            alert("Моля, напишете коментар.");
            return;
        }

        try {
            const response = await api.post(
                `/Review/${numericProductId}`,
                {
                
                rating,
                comment,
                
                },
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            setReviews((prev) => [response.data, ...prev]);

            setComment('');
            setRating(0);
        } catch (error){
            console.error("Грешка при изпращане на отзива:", error);
        }
    };

    return(


        <div className="mt-20">
            <div className="grid grid-cols-2 items-center justify-center gap-5">
                <div className="bg-[#163B32]/20 border border-[#DAF1DE]/15 rounded-3xl p-8 h-full">
                    <div className="items-center flex flex-col justify-center">
                        <span className="font-extrabold text-4xl text-[#DAF1DE] tracking-tight border rounded-lg px-4 py-3 border-[#DAF1DE]/10 bg-[#051F20]/50 shadow-md">{averageRating}</span>
                        
                        <div className="flex items-center gap-1 my-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FiStar
                                    key={star}
                                    className={`size-6 ${
                                        star <= Math.round(Number(averageRating))
                                        ? "fill-[#D4AF37] text-[#DAF1DE]" 
                                        : "text-[#DAF1DE]/30" 
                                        
                                    }`}
                                    />
                                    
                                    
                                ))}
                                
                                </div>
                        <span className="font-extrabold text-2xl text-[#DAF1DE] tracking-tight mt-1">Среден рейтинг на този продукт</span>
                        <div className="border border-b w-full my-6 border-[#DAF1DE]/30"></div>
                    </div>
                     {[5, 4, 3, 2, 1].map((rowCount) => {
                        const percentage =getRatingPercentage(rowCount);
                        return(
                    <div key={rowCount} className="flex items-center gap-5">

                                <div className="flex gap-1 my-1">
                                {[1, 2, 3, 4, 5].map((starIndex) => (
                                    <FiStar
                                    key={starIndex}
                                    className={`size-5 ${
                                        starIndex <= rowCount
                                        ? "fill-[#D4AF37] text-[#DAF1DE]" 
                                        : "text-[#DAF1DE]/30" 
                                        
                                    }`}
                                    />
                                    
                                    
                                ))}
                                
                                </div>

                                <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                                    <div className="h-full rounded-full bg-[#DAF1DE] transition-all duration-500"
                                        style={{width:`${percentage}%`}}
                                    ></div>
                                </div>
                                    <span className="font-bold tracking-tighter w-10 text-sm text-[#DAF1DE]">{percentage}%</span>
                            
                            </div>
                        );
                            })}

                </div>
                <div className="items-center flex flex-col justify-center">
                    
                <div className="bg-[#163B32]/20 border border-[#DAF1DE]/15 rounded-3xl p-8 w-full ">
                <span className="text-[#DAF1DE] text-xl font-extrabold tracking-tighter uppercase">Дайте вашата оценка за този продукт</span>
                     <div className="flex gap-2 items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                            key={star}
                            type="button"
                            onClick={() =>setRating(star)}
                            className="font-extrabold text-4xl text-[#DAF1DE] tracking-tight border rounded-lg px-4 py-3 border-[#DAF1DE]/10 bg-[#051F20]/50 shadow-md my-6 "
                            >
                                <FiStar
                                    className={`size-6 ${
                                        star <= rating
                                        ? "fill-[#D4AF37] duration-300"
                                        :"text-[#DAF1DE]/30 hover:fill-[#D4AF37]"
                                    }`}
                                  />      
                            </button>
                            
                                ))}
                                <button
                                type="button"
                                onClick={() =>setRating(0)}
                                className="ml-2 text-[#DAF1DE]/30 hover:text-red-400 transition-colors cursor-pointer"
                                ><TiDelete size={30}></TiDelete>
                                </button>
                     </div>
                     
                     
                     <span className="text-[#DAF1DE] text-xl font-extrabold tracking-tighter uppercase">Оставете вашия отзив за продукта</span>
                     <form onSubmit={handleSubmit} className ="mt-5">
                        <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Оставете вашия отзив тук..."
                        className="tracking-tight font-semibold bg-[#051F20] border border-[#163B32] p-8 w-full rounded-xl resize-none text-gray-300"
                        />
                        <button 
                        type="submit"
                        
                        className='w-full py-4 mt-4 rounded-xl bg-[#235347] text-[#DAF1DE] hover:bg-[#163B32] transition-all shadow-[0_4px_25px_rgba(35,83,71,0.5)] border border-[#8EB69B]/20 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer uppercase font-bold tracking-tighter'>Добави ревю</button>
                     </form>
                </div>
                </div>
                                        
                
            </div>

            <div className="mt-10">
    <h3 className="text-[#DAF1DE] text-xl font-extrabold tracking-tighter uppercase mb-6 text-center">
        Виж какво мислят останалите за този продукт
    </h3>


                  
{reviews.length=== 0 ? (
        <div className="flex items-center justify-center bg-[#072E30] text-center rounded-xl border border-[#10B981]/20 p-8 my-6">
            <h3 className="text-[#DAF1DE]/70 uppercase tracking-tighter font-bold text-xl">Все още няма отзиви за този продукт</h3>
        </div>
    ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {reviews.map((review) => (
      <ReviewCard key={review.id} review={review} onDelete={handleDelete}  />
    ))}
        </div>
    )}
        </div>
 </div>

    )

    
}
export default ReviewSection;