import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer>
                <div className='container grid2'>
                    <div className="box">
                        <h1>Frequent Grooming</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores explicabo provident maxime tempora. Harum aliquid, sequi consequuntur reiciendis dolore velit eum? Vitae voluptatem ipsam minus alias velit, dicta quas.</p>

                        <div className='icon d_flex'>
                            <div className="img d_flex">
                                <i className='fa-brands fa-google-play'></i>
                                <span>Google Play</span>
                            </div>
                            <div className="img d_flex">
                                <i className='fa-brands fa-app-store-ios '></i>
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <h2>About Us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Customer Care</h2>
                        <ul>
                            <li>Help Center</li>
                            <li>How To Purchase</li>
                            <li>Track Your Order</li>
                            <li>Return & Refund</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>Streat no. building frequentGroom</li>
                            <li>Email: abc@help.com</li>
                            <li>Phone: +91 73102 48383</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer