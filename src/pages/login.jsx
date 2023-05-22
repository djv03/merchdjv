import next from 'next/router';
import {useRouter}from 'next/router'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

function signup() {
   const router= useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        if (localStorage.getItem('token')) {
            router.push('/')
        }
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {  email, password }
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log(res);
        let response = await res.json();
        console.log(response);
        setEmail('')
        setPassword('')
        if (response.sucess) {
            localStorage.setItem('token',response.token)
            toast.success('logged In sucessfully!', {
                position: "top-left",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
            router.push(`${process.env.NEXT_PUBLIC_HOST}`)
            },1000);
        }
        else{
            toast.error(response.error, {
                position: "top-left",
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

    const handleChange = (e) => {
        
         if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }

    }
    return (
        <section className="">
            <ToastContainer
                position="top-left"
                autoClose={800}
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
                            Login
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" method="POST">

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input value={email} onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="usrussiabros@gmail.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> password</label>
                                <input value={password} onChange={handleChange} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <p className='text-white'>new here? create your account <Link href={'/signup'} className='text-emerald-300 font-bold'>here</Link></p>
                            </div>

                            <button type="submit" className="w-full text-white bg-emerald-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                                <p className='text-white mt-4'>forget password <Link href={'/forgetpass'} className='text-emerald-300 font-bold'>click here</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default signup
