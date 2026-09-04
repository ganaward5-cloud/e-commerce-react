import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaOpencart } from "react-icons/fa6";
import { useState } from "react";
import '../styles/Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar({cart}){
    const cartCount =cart.reduce((acc,cur) => acc+cur.quantity,0)
    const [search ,setSearch]=useState("");
    return (
        <>
    <nav className="navbar">
        <h2 className="logo" >Exclusive</h2>
        <div>
            <ol className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/SignUp">Sign Up</Link></li>
            
            </ol>
        </div>


        <div className="search">
            <input type="text"
             placeholder="What are you looking for" 
             value={search} 
             onChange={(ev) =>(setSearch(ev.target.value))}
             onKeyDown={(ev) =>{if(ev.key === "Enter"){(setSearch(""))}}}/>


             <button onClick={() => (setSearch(""))}  >
                    <CiSearch/></button>
            
        </div>
        
        
        <div className="icons">
            <Link to="/wishlist"><FaRegHeart/></Link>
            <Link to="/Account"><VscAccount/></Link>


           
            <div className="cart-wrapper">
                <span className="cart-count">{cartCount}</span>
                <Link to="/Cart" className="cart-link"><FaOpencart/></Link>
            </div>
        </div>
    </nav>
        </>
    )
}