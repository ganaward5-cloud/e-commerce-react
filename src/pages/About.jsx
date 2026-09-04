import { IoStorefrontSharp } from "react-icons/io5";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { FaSackDollar } from "react-icons/fa6";
import { BsBagCheckFill } from "react-icons/bs";
import download from '../assets/download (11).png'
import '../styles/About.css'

export default function About(){

   return(
    <>
    <div className="about-container">

        <div className="about-top">
            <div className="about-text">
                <h1 className="about-title">Our Story</h1>
                <p className="about-paragraph">Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh.
                Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands
                and serves 3 millions customers across the region.</p>

                <p className="about-paragraph">Exclusive has more than 1 Million products to offer, growing at a very fast.
                Exclusive offers a diverse assortment in categories ranging from consumer.</p>
            </div>

            <img src={download} alt="Our story" className="about-img"/>
        </div>

        <div className="about-stats">
            
            <div className="stat-card">
               <span className="stat-icon"><IoStorefrontSharp /></span>
               <p className="stat-number">10.5K</p> 
               <p className="stat-label">Sellers active our site</p>
            </div>
            
            <div className="stat-card stat-card-active">
                <span className="stat-icon"><HiMiniCurrencyDollar /></span>
                <p className="stat-number">33K</p>
                <p className="stat-label">Monthly Product Sale</p>
            </div>
            
            <div className="stat-card">
                <span className="stat-icon"><FaSackDollar /></span>
                <p className="stat-number">45.5K</p>
                <p className="stat-label">Customer active in our site</p>
            </div>
            
            <div className="stat-card">
                <span className="stat-icon"><BsBagCheckFill/></span>
                <p className="stat-number">25K</p>
                <p className="stat-label">Annual gross sale in our site</p>
            </div>

        </div>
    </div>
    </>
   ) 
}