import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


import toast from 'react-hot-toast';
import axios from 'axios';

import './login.css'
import Layout from '../../components/Layout';
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postbody = { email, password };
            const res = await axios.post(`/api/v1/auth/login`, postbody);
            if (res.data.success) {
                toast.success(`${res.data.message}`);
                setAuth({
                    ...auth,
                    customer: res.data.customer,
                    token: res.data.token
                });
                localStorage.setItem('auth', JSON.stringify(res.data))
                setTimeout(() => {
                    navigate(location.state || '/')
                }, 500);

            }
            else {
                toast.error(`${res.data.message}`);
            }
        } catch (error) {
            toast.error(`something unexpected happned`);
        }

    };
    return (
        <Layout title={"welcome back!"}>
            <div className="login">
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="input-group">
                            <span className="icon">
                                <MdEmail />
                            </span>
                            <input type="text"
                                placeholder='enter your email'
                                id="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className="input-group">
                            <span className="icon">
                                <RiLockPasswordFill />
                            </span>
                            <input type="password"
                                placeholder='enter your password'
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <p className='forgot-pass'>
                            <Link to={'/forgot-password'} >forgot password?</Link>
                        </p>
                        <button type="submit" className="btn">
                            Login
                        </button>
                        <div className="sign-link">
                            <p>
                                Don't have an account?{" "}
                                <Link to={'/register'}>register here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
