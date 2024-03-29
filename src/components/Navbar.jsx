import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import logo from '../../public/logo.png'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsBagCheckFill } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'
const Navbar = ({ logout, user, cart, addtoCart, removefromCart, clearCart, total }) => {
    // console.log(user)
    const cartref = useRef();
    const toggleCart = () => {

        if (document.querySelector('.checkout').classList.contains('translate-x-full')) {
            cartref.current.classList.remove('translate-x-full');
            cartref.current.classList.add('translate-x-0');
        }
        else {
            cartref.current.classList.add('translate-x-full');
            cartref.current.classList.remove('translate-x-0');
        }
    }
    const checkoutclick = () => {
        cartref.current.classList.add('translate-x-full');
    }
    const [dropdown, setDropdown] = useState(false)
    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }
    return (
        <div className='flex flex-wrap justify-between sticky top-0 bg-white z-10   '>

            {/* logo section */}
            <div className=' mx-4 mt-2'>
                <Link href={'/'}>
                    <Image className='h-14 w-14 border-0 rounded-3xl ' src={logo} alt='merchdjv.com0'></Image>
                </Link>
            </div>
            {/* navlinks section */}
            <div className=" absolute mt-16 w-full  bg-gray-400 md:relative md:mt-0 md:w-[50vw] md:bg-white  ">
                <ul className='flex items-center justify-center  space-x-4 font-bold mt-6 md:text-xl mx-12 '>
                    <Link href={'/tshirts'}> <li className='mb-4 hover:text-emerald-300 ease-in duration-100'>T-Shirts</li></Link>
                    <Link href={'/hoodies'}> <li className='mb-4 hover:text-emerald-300 ease-in duration-100'>Hoddies</li></Link>
                    <Link href={'/mugs'}> <li className='mb-4 hover:text-emerald-300 ease-in duration-100'>Mugs</li></Link>
                    <Link href={'/acessories'}> <li className='mb-4     hover:text-emerald-300 ease-in duration-100'>Acessories</li></Link>
                </ul>
            </div>

            {/* navend section */}
            <div className='flex '>
                <a onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }}  >
                    {dropdown &&
                        <div className="absolute right-20 mt-14  bg-emerald-400 rounded-lg ">
                            <ul className='px-4 py-4 '>
                                <Link href={'/order'}><li className='p-1  font-bold cursor-pointer text-white  hover:text-black '>Orders</li></Link>
                                <li className='p-1  font-bold cursor-pointer text-white  hover:text-black '>My account</li>
                                <li onClick={logout} className='p-1 py-2   font-bold cursor-pointer text-white  hover:text-black  mt-4 bg-emerald-600 rounded-lg'>Logout</li>
                            </ul>
                        </div>
                    }
                    {user.value && <div className='border-none hover:border-emerald-400 border-2'> <MdAccountCircle className='cursor-pointer text-3xl mt-5 hover:text-emerald-600' /></div>}
                </a>

                {!user.value &&
                    <Link href={'/login'}>
                        <button className='rounded bg-slate-400 text-emerald-300  m-4 p-2 w-24 h-10 ease-in duration-100 font-bold hover:bg-slate-600 '>login </button>
                    </Link>
                }

                <div onClick={toggleCart} ref={cartref} className=' m-2 p-3 cursor-pointer hover:text-emerald-500' ><AiOutlineShoppingCart className='border-red-700 text-3xl ' /></div>
            </div>

            <div className={`checkout rounded-lg absolute h-[100vh] top-4 right-0 bg-emerald-400 p-4 transhtmlForm transition-transhtmlForm translate-x-full `} id='sidecart' ref={cartref}    >
                <div className=' top-3 right-2  cursor-pointer text-2xl' onClick={toggleCart} >
                    <AiFillCloseCircle />
                </div>

                <h3 className=' mt-4 font-bold'>Your Products</h3>
                <hr  className=' mt-4 text-gray-500'/>
                {!user.value && Object.keys(cart).length == 0 && <div className='my-4 text-base'>Login to start shopping---&gt; <Link href={'/login'}><button className='rounded bg-slate-600 text-emerald-300 p-2 w-24 h-10 ease-in duration-100 font-bold hover:bg-slate-700 '>Login </button></Link> </div>}
                {user.value && Object.keys(cart).length == 0 && <div className='my-4 text-base'>cart is empty!!!  </div>}
                {Object.keys(cart).map((k) => {
                    return <ul key={cart[k].slug} >
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold'> {cart[k].title} </div>
                            <span className='mx-2 text-sm '>{cart[k].size}/{cart[k].variant}</span>
                            <span className='mx-2 text-sm '>₹ {cart[k].price}</span>
                            <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
                                <AiOutlineMinusCircle onClick={() => { removefromCart(k, 1, cart[k].price, cart[k].title, cart[k].size, cart[k].variant) }} className='cursor-pointer text-black' />
                                <span className='mx-2 text-sm '>{cart[k].qty}</span>
                                <AiOutlinePlusCircle onClick={() => { addtoCart(k, cart[k].qty, cart[k].price, cart[k].title, cart[k].size, cart[k].variant) }} className='cursor-pointer text-black' />
                            </div>
                        </div>
                    </ul>
                })}

                <div className="cart-buttons flex flex-col mt-8 ">
                    <Link href={'/checkout'}>
                        <button onClick={checkoutclick}  className='flex justify-center rounded-md py-2 px-4 text-white bg-green-600 hover:bg-green-800'> <BsBagCheckFill className='m-1' />checkout</button>
                    </Link>
                    <button className='mt-4 rounded-md py-2 px-6 text-white bg-black cursor-default'>Total:{total}  </button>
                    <button onClick={() => { clearCart() }} className='mt-4 rounded-md py-2 px-4 text-white bg-red-400 hover:bg-red-600'>clearCart</button>
                </div>
            </div>
        </div>


    )
}

export default Navbar
