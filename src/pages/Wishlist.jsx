import ProductCard from "../components/ProductCard"
import { useOutletContext } from "react-router-dom"
import '../styles/wishlist.css'
    

export default function Wishlist(){

    const {wishlist} = useOutletContext();

    return(
        <>
        <div className="wishlist-page">
            <h1 className="wishlist-title">Wishlist</h1>
            <div className="wishlist-grid">
                {wishlist.map((item) => ( <ProductCard key={item.id} product={item} />))}
            </div>
        </div>
        </>
    )
}