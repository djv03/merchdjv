
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
const Forgetpassword = () => {

    const [email, setEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [answer, setAnswer] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postbody = {  email, newpassword,answer };
            const res = await axios.post(`/api/v1/auth/forgot-password`, postbody);
            if (res.data.success) {
                toast.success(`${res.data.message}`, toastOptions);
                navigate('/')
            }
            else {
                toast.error(`${res.data.message}`, toastOptions);
            }
        } catch (error) {
            toast.error(`something unexpected happned`, toastOptions);
        }
    };
    return (
        <Layout title={"Forget password"} >
            <div className="login">

                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <h2>Forget password</h2>
                        
                        <div className="input-group">
                            <span className="icon">
                                <MdEmail />
                            </span>
                            <input type="email"
                                placeholder="enter your registered email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className="input-group">
                            <span className="icon">
                                <FaKey/>
                            </span>
                            <input type="password"
                                id="password"
                                placeholder="what is your favourite sport"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                required />
                        </div>
                        <div className="input-group">
                            <span className="icon">
                                <RiLockPasswordFill />
                            </span>
                            <input type="password"
                                id="password"
                                placeholder="choose your new password"
                                value={newpassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required />
                        </div>
                       
                        <button type="submit" className="btn">
                            Apply changes
                        </button>
                    </form>
                </div>
            </div>

        </Layout>
    );
};

export default Forgetpassword;
