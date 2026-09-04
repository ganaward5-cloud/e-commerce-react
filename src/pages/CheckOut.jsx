import '../styles/CheckOut.css'
import bkash from '../icons/bkash.png'
import visa from '../icons/visa.png'
import Tsth from '../icons/Tsth.png'
import MasterCard from '../icons/MasterCard.png'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
export default function CheckOut(){
    
    const {cart} =useOutletContext()
    const total=cart.reduce((acc,cur) => acc+cur.price * cur.quantity,0)
    const initialState={Fname:"" , ComName:"", streetAdd:"" , apartment:"" ,city:"",PhoneNum:"" ,email:"" ,save:false ,coupon:"" ,payment:'cash'}
    const[checkout,setCheckout] =useState(initialState)

    
    return(
        <>
        <div className="checkout-container">
            <form className="billing-form" onSubmit={(ev) => ev.preventDefault()}>
                <h1 className="billing-title">Billing Details</h1>

                <div className="form-group">
                    <label>First Name<span className="required">*</span></label>
                    <input type="text"
                     className="form-input"
                     value={checkout.Fname}
                     onChange={(ev) => setCheckout({...checkout,Fname:ev.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" className="form-input"
                    value={checkout.ComName}
                    onChange={(ev) => setCheckout({...checkout,ComName:ev.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label>Street Address<span className="required">*</span></label>
                    <input type="text" className="form-input"
                    value={checkout.streetAdd}
                    onChange={(ev) => setCheckout({...checkout,streetAdd:ev.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label>Apartment, floor, etc. (optional)</label>
                    <input type="text" className="form-input"
                    value={checkout.apartment}
                    onChange={(ev) => setCheckout({...checkout,apartment:ev.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label>Town/City<span className="required">*</span></label>
                    <input type="text" className="form-input"
                    value={checkout.city}
                    onChange={(ev) => setCheckout({...checkout,city:ev.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label>Phone Number<span className="required">*</span></label>
                    <input type="text" className="form-input"
                    value={checkout.PhoneNum}
                    onChange={(ev) => setCheckout({...checkout,PhoneNum:ev.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label>Email Address<span className="required">*</span></label>
                    <input type="email" className="form-input"
                    value={checkout.email}
                    onChange={(ev) => setCheckout({...checkout,email:ev.target.value})}
                    />
                </div>

                <div className="save-info">
                    <input type="checkbox" checked={checkout.save} className="save-checkbox"
                     onChange={() => setCheckout({...checkout,save:!checkout.save})}
                    />
                    <span>Save this information for faster check-out next time</span>
                </div>
            </form>

            <div className="order-summary">

                {cart.map((item) => (
                    <div className="summary-item" key={item.id}>
                        <img src={item.image} alt={item.title} className="summary-img"/>
                        <p className="summary-name">{item.title}</p>
                        <span className="summary-price">{item.price *item.quantity}</span>
                    </div>
                ))}
                
                
                    <div className="summary-row">
                    <p>Subtotal</p>
                    <span>{total}</span>
                    </div>
                    
               
                <div className="summary-row">
                    <p>Shipping</p>
                    <span>Free</span>
                </div>

                <div className="summary-row summary-total">
                    <p>Total</p>
                    <span>{total}</span>
                </div>

                <div className="payment-methods">
                    <label className="payment-option">
                        <input type="radio" name="payment" value="Bank"  checked={checkout.payment==="Bank"} onChange={(ev) => setCheckout({...checkout,payment:ev.target.value})}/>
                        <span>Bank</span>
                        <div className="payment-icons">
                            <img src={bkash} alt="Bkash" className="payment-icon"/>
                            <img src={visa} alt="Visa" className="payment-icon"/>
                            <img src={MasterCard} alt="MasterCard" className="payment-icon"/>
                            <img src={Tsth} alt="Trust" className="payment-icon"/>
                        </div>
                    </label>
                    <label className="payment-option">
                        <input type="radio" name="payment"  checked={checkout.payment==="cash"} value="cash" onChange={(ev) => setCheckout({...checkout,payment:ev.target.value})}/>
                        <span>Cash On Delivery</span>
                    </label>
                </div>

                <div className="coupon-row">
                    <input type="text" placeholder="Coupon Code" className="cpn-input"
                    value={checkout.coupon}
                     onChange={(ev) => setCheckout({...checkout,coupon:ev.target.value})}
                    />
                    <button type='button' className="cpn-btn" onClick={() => setCheckout({...checkout,coupon:""})}>Apply Coupon</button>
                </div>

                <button type='button' className="place-order-btn" onClick={() => setCheckout(initialState)}>Place Order</button>

            </div>

        </div>
        </>
    )
}