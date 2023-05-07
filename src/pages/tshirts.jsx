import React from 'react'
import Link from 'next/link'
import handler from './api/getproducts'
import Product from '../../modals/Product'
import mongoose from 'mongoose'
function tshirts({allproducts}) {
  console.log(allproducts)
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap m-5">
          <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
            <Link href={'/products/wear-the-code'} className="block relative  rounded overflow-hidden  md:h-[50vh]  bg-slate-500 ">
              <img alt="ecommerce" className=" object-top w-full h-full block" src="https://m.media-amazon.com/images/I/61MPGbBpC3L._UY741_.jpg" />
            </Link>
            <div className="mt-4 md: text-center p-2">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">₹499</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {

  const merchdjv_productSchenma = new mongoose.Schema({

    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: String, required: true },
    availbaleQty: { type: Number, required: true },
  
  }, { timestamps: true });
  mongoose.models = {}
  mongoose.model('product', merchdjv_productSchenma);

  if (!mongoose.connections.length > 0) {
    await mongoose.connect('mongodb+srv://20it88:Dhruvin%40123@cluster0.vidlpb4.mongodb.net/test')
  }

  let allproducts = await mongoose.model('product').find({ title: 'mug' });

  return {
    props: {allproducts: JSON.parse(JSON.stringify(allproducts)) }, // will be passed to the page component as props
  };
}
export default tshirts
