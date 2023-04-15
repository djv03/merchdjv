import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import logo from '../../public/logo.png'
import { AiOutlineShoppingCart, AiFillCloseCircle,AiOutlinePlusCircle,AiOutlineMinusCircle } from 'react-icons/ai'
import {BsBagCheckFill} from 'react-icons/bs'
const Navbar = () => {

    const cartref = useRef();
    const toggleCart = () => {
        // console.log('clicked');
        // console.log( cartref.current.classList.contains('translate-x-full'));
        // console.log( cartref.current.classList.contains('translate-x-0'));

        if(cartref.current.classList.contains('translate-x-full')){
            console.log('in')
            cartref.current.classList.remove('translate-x-full');
            cartref.current.classList.add('translate-x-0');
        }
        else if(cartref.current.classList.contains('translate-x-0')){
            
            console.log('out')
            cartref.current.classList.add('translate-x-full')
            cartref.current.classList.remove('translate-x-0')
        }
        
    }
    return (
        <div className='flex flex-wrap justify-between '>

            {/* logo section */}
            <div className=' p-4 mx-4 '>
                <Link href={'/'}>
                    <Image className='h-18 w-14 border-0 rounded-3xl ' src={logo} alt='merchdjv.com0'></Image>
                </Link>
            </div>

            {/* navlinks section */}
            <div className="">
                <ul className='flex items-center justify-center  space-x-4 font-bold mt-6 md:text-xl mx-12'>
                    <Link href={'/tshirts'}> <li className='hover:text-emerald-300 ease-in duration-100'>tshirts</li></Link>
                    <Link href={'/hoodies'}> <li className='hover:text-emerald-300 ease-in duration-100'>hoddies</li></Link>
                    <Link href={'/mugs'}> <li className='hover:text-emerald-300 ease-in duration-100'>Mugs</li></Link>
                    <Link href={'/acessories'}> <li className='hover:text-emerald-300 ease-in duration-100'>acessories</li></Link>
                </ul>
            </div>

            {/* navend section */}
            <div className='flex '>
                <button className='rounded bg-slate-400 text-emerald-300  m-4 p-2 w-24 h-10 ease-in duration-100 font-bold hover:bg-slate-600 '>Login</button>
                <button className='rounded bg-slate-200 text-green-600 m-4 p-2 w-24 h-10 ease-in duration-100 font-bold hover:bg-slate-400'>Sign up</button>
                <div className='m-5 cursor-pointer hover:text-emerald-300' onClick={toggleCart} ref={cartref}><AiOutlineShoppingCart className='text-3xl ' /></div>
            </div>

            <div className="checkout absolute h-[100vh] top-4 right-0 bg-emerald-200 p-4 transform transition-transform translate-x-full " onClick={toggleCart} ref={cartref}>
                <div className=' top-3 right-2  cursor-pointer text-2xl' >
                    <AiFillCloseCircle />
                </div>

                <h1 className='mt-4'>merchdjv- Your checkout</h1>
                <h3 className=' mt-4 font-bold'>your products</h3>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <button className='flex mt-4 rounded-md py-2 px-4 text-white bg-green-600 hover:bg-green-800'><BsBagCheckFill className='m-1 '/>checkout</button>

            </div>
        </div>


    )
}

export default Navbar
