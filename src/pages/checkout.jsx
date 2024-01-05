import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'


const checkout = ({ cart, addtoCart, removefromCart, total }) => {

  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    email: '',
    address: '',
    pin: '',
    mobile: '',
  });

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/order',
      query: deliveryDetails, // Pass your form data as an object
    });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }
  return (
    <div className="flex justify-center content-center md:flex flex-col">

      {/* order details section */}
      <section class="text-gray-600 body-font relative ">
        <div class="container px-5 py-16 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">All set for your product</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Just need to some details to shoot your products in shipping</p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                  <input onChange={handleChange} value={deliveryDetails.name} placeholder='Enter your name' type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                  <input onChange={handleChange} value={deliveryDetails.email} placeholder='Enter your email' type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">Adress</label>
                  <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="number" class="leading-7 text-sm text-gray-600">Mobile</label>
                  <input onChange={handleChange} value={deliveryDetails.mobile} placeholder='Enter your mobile' type="text" id="mobile" name="mobile" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Pincode</label>
                  <input onChange={handleChange} value={deliveryDetails.pin} placeholder='Enter your PIN' type="text" id="pin" name="pin" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Distirct</label>
                  <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">state</label>
                  <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* review items details section*/}
      <div className="checkout  flex flex-col m-8  text-center content-center   bg-emerald-200 rounded-lg    "  >


        <h1 className='p-4 font-bold bg-emerald-300'>merchdjv- Your checkout</h1>
        <h3 className=' mt-4 font-bold'>your products</h3>
        {Object.keys(cart).length == 0 && <div className='my-4 '>cart is empty!!!</div>}
        {Object.keys(cart).map((k) => {
          return <li key={cart[k]} className='list-none mt-6 '>
            <div className="flex justify-around text-center ">
              <div className="product-img ">
                <Image src={cart[k].img} alt="product photo" />
                <div className='mx-4 font-bold'> {cart[k].title} </div>
              </div>
              <div className="product-details flex items-center md: flex-col  ">
                <div className="flex">
                  <span className='mx-8 font-bold'> {cart[k].size}/{cart[k].variant}</span>
                  <span className='mx-8 font-bold'>₹ {cart[k].price}*{cart[k].qty}</span>
                </div>
              </div>
              <div className='flex font-semibold items-center justify-center  text-lg'>
                <AiOutlineMinusCircle onClick={() => { removefromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-black' />
                <span className='mx-2 text-sm '>{cart[k].qty}</span>
                <AiOutlinePlusCircle onClick={() => { addtoCart(k, cart[k].qty, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-black' />
              </div>
            </div>
          </li>
        })}

        <button className=' w-3/5 mt-8 p-2 rounded-lg m-16 text-white bg-black'>total:{total} </button>
      </div>

      
        <button class="flex mx-auto my-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Place Order</button>
    
    </div>
  )
}

export default checkout
