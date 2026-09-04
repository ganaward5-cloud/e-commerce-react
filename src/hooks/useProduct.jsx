import { useState,useEffect } from "react";

import GetProduct from '../Services/temp'
export default function UseProduct(){

    const [products,setProducts]=useState([])

    useEffect(() =>{
        async function fetchProduct() {
            
            const data= await GetProduct();
            setProducts(data)
        }
        fetchProduct();
    },[])
    return products;
}