import '../styles/ProductCard.css'
import {  useOutletContext } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";


export default function ProductCard({product}){
    const {setCart} =useOutletContext();
    const {wishlist,setWishlist} =useOutletContext();
    const isInWishlist = wishlist.some((item) => item.id === product.id);

    const handlWishlist =() => {
         
        if(isInWishlist) {
           setWishlist(wishlist.filter((prod) => prod.id !== product.id) )
        }else{
            setWishlist([...wishlist,product])
        }
    }
    
    const handleAddToCart = () => {
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === product.id);
            if (existing) {
                return prevCart.map(item =>
                    item.id === product.id ?
                        { ...item, quantity: item.quantity + 1 }  : item
                        
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    return (
        <>
            <div className="product-card">
                <img src={product.image} alt={product.title} />
                <h4>{product.title}</h4>
                <p>{product.price}$</p>
                <button onClick={ handlWishlist} className={isInWishlist ? "heart-filled" : "heart-empty"}> <FaRegHeart/></button>

                <button type="button" onClick={handleAddToCart} className="add-to-cart-btn">Add To Cart </button>
            </div>
        </>
    )
}