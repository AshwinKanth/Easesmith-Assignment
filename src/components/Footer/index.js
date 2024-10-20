import React from 'react';
import './index.css'; 
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Lorem Ipsum Dolor Sit Amet. Aut Ipsum Illum Et Nostrum Quidem Aut Necessibus Enim.</p>
          <input type="email" placeholder="Enter Your Email Address" />
          <button className="subscribe-btn">Subscribe</button>
        </div>

        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Help & Support</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#">Book Maali</a></li>
            <li><a href="#">Plant Day Care</a></li>
            <li><a href="#">Rent Plants</a></li>
            <li><a href="#">Plants & Pots</a></li>
            <li><a href="#">Gardening Tools</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Orders & Returns</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Return, Refund & Replacement Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Get in Touch</h3>
          <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
          <p>Call: +919958287272</p>
          <p>Email: care@chaperoneplants.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-chaperone">
          <h3>CHAPERONE</h3>
          <p>Lorem ipsum dolor sit amet. Aut ipsum illum et nostrum quidem aut necessitatibus enim ut internos.</p>
        </div>

        <div className="footer-social">
      <h3>Follow us on</h3>
      <ul className="social-icons">
        <li><a href="#"><Instagram size={24} /></a></li> 
        <li><a href="#"><Facebook size={24} /></a></li> 
        <li><a href="#"><Youtube size={24} /></a></li>
        <li><a href="#"><Linkedin size={24} /></a></li> 
      </ul>
    </div>
      </div>

      <div className="footer-copyright">
        <p>© 2023, chaperone.com All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;