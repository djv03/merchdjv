
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserTie,FaKey } from "react-icons/fa";

import toast from 'react-hot-toast';
import './login.css'
import Layout from "../../components/Layout";
import axios from 'axios';

const toastOptions = {
    position: "top-right",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}
const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [answer, setAnswer] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postbody = { name, email, password,answer };
            const res = await axios.post(`/api/v1/auth/register`, postbody);
            if (res.data.success) {
                toast.success(`${res.data.message}`, toastOptions);
                navigate('/login')
            }
            else {
                toast.error(`${res.data.message}`, toastOptions);
            }
        } catch (error) {
            toast.error(`something unexpected happned`, toastOptions);
        }
    };
    return (
        <Layout title={"let's get started"} >
            <div className="login">

                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <div className="input-group">
                            <span className="icon">
                                <FaUserTie />

                            </span>
                            <input type="text"
                                id="username"
                                placeholder="enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </div>
                        <div className="input-group">
                            <span className="icon">
                                <MdEmail />
                            </span>
                            <input type="email"
                                placeholder="enter your email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className="input-group">
                            <span className="icon">
                                <RiLockPasswordFill />
                            </span>
                            <input type="password"
                                id="password"
                                placeholder="choose your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <div className="input-group">
                            <span className="icon">
                                <FaKey/>
                            </span>
                            <input type="text"
                                id="answer"
                                placeholder="what is your favourite sport"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                required />
                        </div>
                        <span style={{fontSize:"13px", color:"red", marginTop:"-23px"}}>*please be certain while anwsering above security question , <br /> It might be used for password recovery </span>
                        <button type="submit" className="btn">
                            Register
                        </button>
                        <div className="sign-link">
                            <p>
                                already have an account?{" "}
                                <Link to={'/login'} >Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </Layout>
    );
};

export default Register;
