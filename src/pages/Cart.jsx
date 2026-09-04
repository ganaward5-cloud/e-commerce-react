import '../styles/Cart.css'
import { useState } from 'react'
import { Link,useOutletContext } from 'react-router-dom'

export default function Cart (){

    const [coupon,setCoupon]=useState("")
    const {cart,setCart} =useOutletContext()

    return(
        <>
        <div className="cart-container">
            <div className="carte">
                <div className="items">
                <h3>Product</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
                <h3>Subtotal</h3>
                </div>


                {cart.map((item) =>(

                    <div className="product-row" key={item.id}>
                    <div className="product-info">
                        <img src={item.image} alt={item.title} className="product-img"/>
                        <span>{item.title}</span>
                    </div>
                    <p>{item.price}</p>
                    
                    <input type="number" value={item.quantity} min={1} className="qty-input" 
                    onChange={(ev) => setCart( cart.map((prod) =>(prod.id ===item.id ? {...prod,quantity:Number(ev.target.value) }: prod)))}/>
                    <p>{item.price * item.quantity}</p>
                    

                    <button className='btn-rmv' type='button' onClick={() => setCart(cart.filter((it) => it.id !==item.id))}>Remove</button>
                    </div>

                ))}


                <div className="cart-btn">
                    <Link to="/" className="return-btn">Return To Shop</Link> 
                    <Link to="/checkout"  className="update-btn"> Proceed To Checkout</Link> 
                </div>

            </div>

            <div className="cart-cpn">
                <input type="text" placeholder="Coupon Code" className="cpn-input"
                value={coupon}
                onChange={(ev) => setCoupon(ev.target.value)}/>
                <button className="cpn-btn" onClick={() => setCoupon("")}>Apply Coupon</button>
            </div>

        </div>
        </>
    )
}