export interface IProuduct{
    id:number;
    name:string;
    price:number;
    quantity:number;
    PrdimgURL:string;
    description?:string;
    Material:string;
    categoryID:number;
    purchaseDate?:Date;
}