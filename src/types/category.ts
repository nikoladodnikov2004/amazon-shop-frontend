export interface CategoryItemDto{
    id:number;
    name: string;
    parentId?:number|null;
    productCount?:number;
    subCategories?:SubCategoryDto[];
}

export interface SubCategoryDto{
    id:number;
    name:string;
    parentId?: number;
    productCount?:number;
}