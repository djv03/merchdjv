import React from 'react'
import {useRouter} from 'next/router'
import { useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgetpass = () => {
    const router = useRouter()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])
    const handleclick=async(e)=>{
        e.preventDefault();
       
       
        if (localStorage.getItem('token')) {
            toast.success('check your email', {
                position: "bottom-center",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else{
            toast.error('no email found', {
                position: "bottom-center",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
       
    }

  return (
    <section className="">
        <ToastContainer
position="bottom-center"
autoClose={1200}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Enter your registered email
                </h1>
                <htmlForm className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                    </div>
                   
                    
                    <button onClick={handleclick} type="submit" className="w-full text-white bg-emerald-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send Code</button>
                  
                </htmlForm>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Forgetpass
