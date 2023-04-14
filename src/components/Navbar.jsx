import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import logo from '../../public/logo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Navbar = () => {
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
                <ul className= 'flex items-center justify-center  space-x-4 font-bold mt-6 md:text-xl mx-12'>
                    <Link href={'/tshirts'}> <li className='hover:text-emerald-300 ease-in duration-100'>tshirts</li></Link>
                    <Link href={'/hoodies'}> <li className='hover:text-emerald-300 ease-in duration-100'>hoddies</li></Link>
                    <Link href={'/mugs'}> <li className='hover:text-emerald-300 ease-in duration-100'>Mugs</li></Link>
                    <Link href={'/acessories'}> <li className='hover:text-emerald-300 ease-in duration-100'>acessories</li></Link>
                </ul>
            </div>

            {/* navend section */}
            <div className='flex '>
                <button className='rounded bg-slate-400 text-emerald-300  m-4 p-2 w-24 h-10 ease-in duration-100 hover:bg-slate-600 '>Login</button>
                <button className='rounded bg-slate-200 text-green-600 m-4 p-2 w-24 h-10 ease-in duration-100 hover:bg-slate-400'>sign up</button>
                <div className='m-5 cursor-pointer hover:text-emerald-300'><AiOutlineShoppingCart className='text-3xl '/></div>
            </div>
        </div>
        

    )
}

export default Navbar
