import React from 'react';
import './Footer.css'; // Importing the CSS for styling
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>MyStore</h3>
                <p>Discover the best products every day.</p>
                <ul className="footer-links">
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
                <p className="footer-contact">
                    Contact Us: <a href="mailto:support@mystore.com">support@mystore.com</a>
                </p>
                <div className="social-media">
                    <Link href={'/'}><i className="fab fa-facebook-f"></i></Link>
                    <Link href={'/'}><i className="fab fa-twitter"></i></Link>
                    <Link href={'/'}><i className="fab fa-instagram"></i></Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
