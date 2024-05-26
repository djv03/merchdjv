import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Header.css';
import { useAuth } from '../context/auth';
import { token } from 'morgan';
import logo from '../assets/md_logo.jpg'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const setIsAboutTextOpen = () => {
        setIsOpen(!isOpen);
    }

    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
        toast.success('see you later ');
        localStorage.removeItem('auth');
        setAuth({
            ...auth,
            customer: null,
            token: ""
        })
    }
    return (
        <>
            <nav className="navbar">
                <div className="logo">

                    <a href="/">
                        <img src={logo} alt="logo" height={23} />
                        MyStore</a>
                </div>
                <div className={`nav-icon ${isOpen ? 'open' : ''}`} onClick={setIsAboutTextOpen}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><Link to={'/products'}>Products</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
                <div className={`nav-end ${isOpen ? ' nav-links' : ''}`}>
                    {
                        !auth.customer ? (<>
                            <button><Link to={'/register'}>sign up</Link></button>
                        </>)
                            :
                            (<button onClick={handleLogout}>Logout</button>)
                    }

                    <button>cart</button>
                </div>
            </nav>
        </>
    );
}

export default Header;
