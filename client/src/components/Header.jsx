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
                            (
                                <>
                                    <div class="dropdown profile-section">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {auth?.customer.name}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><Link class="dropdown-item" to={'/profile'}> My Profile</Link></li>
                                            <li><Link class="dropdown-item" to={'/dashboard'}>Orders</Link></li>
                                            <li><a class="dropdown-item" href="/"><button onClick={handleLogout}>Logout</button></a></li>
                                        </ul>
                                    </div>
                                    
                                </>
                            )
                    }

                    <button>cart</button>
                </div>
            </nav>
        </>
    );
}

export default Header;
