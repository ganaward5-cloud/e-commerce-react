import '../styles/Footer.css';
import { useState } from 'react';
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { LuInstagram } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from 'react-router-dom';
import QR from "../icons/QR.jpg";
import AppStore from "../icons/AppStore.png";
import GooglePlay from "../icons/GooglePlay.png";

import "../styles/Footer.css";

export default function Footer() {

    const[email,setEmail]=useState("")
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-column">
                    <p className="footer-title">Exclusive</p>
                    <p className="footer-subtitle">Subscribe</p>
                    <p className="footer-subscribe">
                        Get 10% off your first order
                    </p>

                    <div className="footer-email">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(ev) =>(setEmail(ev.target.value)) }
                        />

                        <button onClick={() => (setEmail(""))}>➤</button>
                    </div>
                </div>


                <div className="footer-column">
                    <p className="footer-title">Support</p>

                    <p className="footer-text">
                        111 Bijoy sarani, Dhaka,<br />
                        DH 1515, Bangladesh.
                    </p>

                    <p className="footer-text">
                        exclusive@gmail.com
                    </p>

                    <p className="footer-text">
                        +88015-88888-9999
                    </p>
                </div>


                <div className="footer-column">
                    <p className="footer-title">Account</p>

                   <Link to="/account" className="footer-link">My Account</Link>
                    <Link to="/login" className="footer-link">Login / Register</Link>
                    <Link to="/cart" className="footer-link">Cart</Link>
                    <Link to="/wishlist" className="footer-link">Wishlist</Link>
                    <Link to="/products" className="footer-link">Shop</Link>
                </div>


                <div className="footer-column">
                    <p className="footer-title">Quick Link</p>

                   <a href='/About'><p className="footer-link">Privacy Policy</p></a>
                    <p className="footer-link">Terms Of Use</p>
                    <p className="footer-link">FAQ</p>
                   <Link to='/Contact'> <p className="footer-link">Contact</p></Link>
                </div>


                <div className="footer-download">
                    <p>Download App</p>

                    <div className="footer-apps">
                        <img src={QR} alt="QR Code" className="footer-qr" />

                        <div className="footer-store">
                            <img src={GooglePlay} alt="Google Play" />
                            <img src={AppStore} alt="App Store" />
                        </div>
                    </div>

                    <div className="footer-social">
                        <CiFacebook />
                        <CiTwitter />
                        <LuInstagram />
                        <TiSocialLinkedin />
                    </div>
                </div>

            </div>

        </footer>
    );
}