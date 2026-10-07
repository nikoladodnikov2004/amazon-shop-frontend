import {useState, useEffect, useCallback} from 'react';
import api from "./api/axios";

 interface Review{
        id:string;
        productId:string;
        rating:number;
        comment:string;
        createdAt:string;
     }

 function useProductReviews(productId: string | number){
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading]=useState<boolean>(true);
    const numericProductId = Number(productId);
    


    const fetchReviews = useCallback(() => {
    if (isNaN(numericProductId) || numericProductId <= 0) {
      setLoading(false);
      return;
    }
    setLoading(true);
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
  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

        
        

const totalReviews=reviews.length;

 const averageRating = totalReviews > 0
        ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1)
        : "0.0";

return {reviews, setReviews, loading, totalReviews, averageRating, refetch:fetchReviews};
} 

export default useProductReviews;