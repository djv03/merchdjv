import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';

const Spinner = () => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    const location=useLocation();
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => --prev);
        }, 1000);
        count === 0 && navigate('/login',{
            state:location.pathname,
        });
        return () => clearInterval(interval);
    }, [count, navigate,location])
    return (
        <div >
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
                <h3 className='text-center text-black'>redirecting you...  </h3>
                <h4 className='text-center text-black'>in {count}  </h4>
                <div class="spinner-border text-secondary" role="status">
                </div>
            </div>

        </div>
    )
}

export default Spinner