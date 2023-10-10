import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import './Navbar.css'

const Respocivenavbar = () => {
    return (
        <div>
            <nav className='main-nav'>
                {/* logo from hom apge */}
                <div className='logo'>
                    <h2>
                        <span>B</span>elymon
                        <span>I</span>nfotech
                    </h2>
                </div>
                {/* 2 parts is  */}
                <div className='mainu-link'>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Serivce</a>
                        </li>
                        <li>
                            <a href="#">Contect</a>
                        </li>
                    </ul>
                </div>
                {/* social media links */}
                <div className='sicial-media'>
                    <ul className='social-media-desktop'></ul>
                    <li>
                        <a href="https://www.flipkart.com/infinix-gt10-pro-cyber-black-256-gb/p/itm121ba8cbe8456?pid=MOBGRT4CDXJ8HR8E&ocmpid=BrandAd_91mobiles_Big_Billion_Days_23_Oct" target='_blank'><FaFacebookSquare className='facebook' /></a>
                    </li>
                    <li>
                        <a href="https://www.flipkart.com/infinix-gt10-pro-cyber-black-256-gb/p/itm121ba8cbe8456?pid=MOBGRT4CDXJ8HR8E&ocmpid=BrandAd_91mobiles_Big_Billion_Days_23_Oct" target='_blank'><FaInstagramSquare className='instagram' /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com//?hl=en" target='_blank'><FaYoutubeSquare className='youtube' /></a>
                    </li>

                </div>
            </nav><br /><br /><br /><br /><br /><br />
            {/* <section className='hero-section'>
                <p>welcome to</p>
                <h1> belymon infotech.</h1>
            </section> */}
        </div>
    )
}

export default Respocivenavbar;




