export interface WishListItemDto{
    id:number;
    productId: number;
    name: string;
    brand: string;
    price: number;
    quantity: number;
    stockQuantity: number;
    imageUrl:string;
    totalSum:number;
}