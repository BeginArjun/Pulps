import { ImageSourcePropType } from "react-native"

interface Product{
    id:number
    product:string
    brand:string
    images:Array<string>
    display_images:string
    price:number
    description:string
    sizes:Array<string>
    reviews:Array<Review>
    rating:number
}

interface Review{
    id:number
    userId:number   // Related to User
    rating:number
    createdAt:Date
    review:string
}

interface User{
    id:number
    name:string
    email:string
    password:string
    orders:Array<Order>
    wishlist:Array<wish>
    cart:Array<Product>
    address:string
    createdAt:Date
    updatedAt:Date
}