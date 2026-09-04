import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import '../styles/Contact.css'

export default function Contact () {
    return(
        <>
        <div className="contact-container">

            <div className="contact-info">

                <div className="info-block">
                    <div className="info-header">
                        <span className="info-icon"><FaPhoneAlt/></span>
                        <p className="info-title">Call To Us</p>
                    </div>
                    <p className="info-text">We are available 24/7, 7 days a week.</p>
                    <p className="info-text">Phone: +8801611112222</p>
                </div>

                <hr className="info-divider"/>

                <div className="info-block">
                    <div className="info-header">
                        <span className="info-icon"><AiFillMessage/></span>
                        <p className="info-title">Write To Us</p>
                    </div>
                    <p className="info-text">Fill out our form and we will contact you within 24 hours.</p>
                    <p className="info-text">Emails: customer@exclusive.com</p>
                    <p className="info-text">Emails: support@exclusive.com</p>
                </div>

            </div>

            <div className="contact-form">

                <div className="form-row">
                    <input type="text" placeholder="Your Name *" className="form-input"/>
                    <input type="email" placeholder="Your Email *" className="form-input"/>
                    <input type="text" placeholder="Your Phone *" className="form-input"/>
                </div>

                <textarea placeholder="Your Message" className="form-textarea"/>

                <button className="form-btn">Send Message</button>
            </div>

        </div>
        </>
    )
}