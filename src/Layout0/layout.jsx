import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";


export default function Layout(){


    const [cart,setCart]=useState([])
    const [wishlist ,setWishlist] =useState([])
    return(
        <>
        <Navbar cart={cart}/>
        <Outlet context={{cart,setCart,wishlist,setWishlist}}/>
        <Footer/>
        </>
    )
}