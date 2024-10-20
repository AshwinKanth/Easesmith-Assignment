import React, { useState } from "react"
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";

import './index.css'

const Header = () => {
    const [active, setActive] = useState('');

    const handleActive = (linkName) => {
        setActive(linkName);
    }

    return (
        <div className="header-container">
            <div className='background'>
                <p className='background-shipping'>Free Shipping on order above 999....</p>
                <p className='background-call'> Call us on :+91 9876805120</p>
            </div>
            <nav className="nav-container">
                <div className="logo-container">
                    <img src='https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335197/image_55_qewaae.png' alt="Logo" className="logo-img" />
                    <p className="logo-name">Chaperone</p>
                </div>

                <ul className="navList-container">
                    <li className={`navItem ${active === 'home' ? 'active' : ''}`} onClick={() => handleActive('home')}>Home</li>
                    <li className={`navItem ${active === 'plantPots' ? 'active' : ''}`} onClick={() => handleActive('plantPots')}>Plants & Pots</li>
                    <li className={`navItem ${active === 'tools' ? 'active' : ''}`} onClick={() => handleActive('tools')}>Tools</li>
                    <li className={`navItem ${active === 'ourservices' ? 'active' : ''}`} onClick={() => handleActive('ourservices')}>Our Services</li>
                    <li className={`navItem ${active === 'blogs' ? 'active' : ''}`} onClick={() => handleActive('blogs')}>Blog</li>
                    <li className={`navItem ${active === 'ourStory' ? 'active' : ''}`} onClick={() => handleActive('ourStory')}>Our Story</li>
                    <li className={`navItem ${active === 'faqs' ? 'active' : ''}`} onClick={() => handleActive('faqs')}>FAQs</li>
                </ul>

                <ul className="profile-cart-container">
                    <Link to="/profile" className="navLink">
                        <li className="navItem profile"><CgProfile size={20} /></li>
                        <p className="profile">My Profile</p>
                    </Link>
                    <Link to="/cart" className="navLink">
                        <li className="navItem profile"><MdOutlineShoppingCart size={20} /></li>
                        <p className="profile">Cart</p>
                    </Link>
                </ul>
            </nav>
            <div className="search-container">
                <div className="input-with-icon">
                    <img src='https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335044/image_1_ctnax6.png' alt="Search" className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search Plant"
                        className="search-input"
                    />
                    <img src='https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335029/image_91_bhoysf.png' alt="Search" className="search-icon-flower" />
                </div>
            </div>
        </div>
    )
}

export default Header