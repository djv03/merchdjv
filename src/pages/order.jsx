import React from 'react'

const order = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">merchdjv.com</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Your order summary</h1>
          <div className="flex mb-4">
            <a className="flex-grow text-emerald-500 border-emerald-500-500 py-2 text-lg px-1">product</a>
            <a className="flex-grow border-gray-300 py-2 text-lg px-24">Quantity</a>
            <a className="flex-grow border-gray-300 py-2 text-lg px-1">price</a>
          </div>
          <div className="flex border-t border-gray-200 py-2 justify-between">
            <span className="text-gray-500">tshirt (L,red)</span>
            <span className="text-gray-500">1</span>
            <span className="  text-gray-900">₹ 499</span>
          </div>
          <div className="flex border-t border-gray-200 py-2 justify-between">
            <span className="text-gray-500">tshirt (L,red)</span>
            <span className="text-gray-500">1</span>
            <span className=" text-gray-900">₹ 499</span>
          </div>
          <div className="flex border-t border-b mb-6 border-gray-200 py-2 justify-between">
            <span className="text-gray-500">tshirt (L,red)</span>
            <span className="text-gray-500">1</span>
            <span className=" text-gray-900">₹ 499</span>
          </div>
          <div className="flex flex-col">
            <span className="title-font font-medium text-2xl text-gray-900">₹ 1498 </span>
            <button className="flex mx-auto text-white bg-emerald-500 border-0 py-2 px-8 mt-4 focus:outline-none hover:bg-emerald-600 rounded">Track order</button>
            
          </div>
        </div>
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
      </div>
    </div>
  </section>
  )
}

export default order
