import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import { confirmOrderForm } from '../../lib/api';
const order = ({ cart, total }) => {
  const router = useRouter();
  const { name, email, address, pin, mobile } = router.query;
  //uncommnet this if you want to go back to old one
  // const sendEmail = async () => {
  //   const to = `${email}`
  //   const subject = 'confirmation mail from merchDJV'
  //   const text = 'this is a fake website'
  //   try {
  //     await axios.post('/order', { to, subject, text });
  //     console.log('Email sent successfully');
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //   }
  // };
  const onSubmit=async({ name, email, address, pin, mobile })=>{
    try {
      await sendContactForm({ name, email, address, pin, mobile });
     console.log('sended sucessfully')
    } catch (error) {
      console.log('error happned', err)
    }

  }
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">merchdjv.com</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Your order summary</h1>
            <div className="flex mb-4 justify-between">
              <a className="flex-grow text-emerald-500 border-emerald-500-500 py-2 text-lg px-1">product</a>
              <a className="flex-grow border-gray-300 py-2 text-lg px-24">Price</a>
              <a className="flex-grow border-gray-300 py-2 text-lg px-24">Quantity</a>
              <a className="flex-grow border-gray-300 py-2 text-lg px-1">subTotal</a>
            </div>
            {Object.keys(cart).map((k) => {
              return <div className="flex border-t border-gray-200 py-2 justify-between">
                <span className="text-gray-500">{cart[k].title}</span>
                <span className="text-gray-500">{cart[k].price}</span>
                <span className="text-gray-500">{cart[k].qty}</span>
                <span className=" text-black">₹ {cart[k].price * cart[k].qty}</span>
              </div>
            })}
            <div className="customer">
              <h2>Order Confirmation</h2>
              <p>Name:{name}</p>
              <p>Email: {email}</p>
              <p>Pin: {pin}</p>
              <p>Mobile: {mobile}</p>
              {/* Other order details */}
            </div>

            <div className="flex flex-col">
              <span className=" mt-4 mx-auto title-font font-medium text-2xl text-gray-900">Grand Total is: ₹{total}</span>
              <button onClick={onSubmit} className="flex mx-auto text-white bg-emerald-500 border-0 py-2 px-8 mt-4 focus:outline-none hover:bg-emerald-600 rounded">Order Now</button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default order
