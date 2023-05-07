import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Products from '../../modals/Product'
function tshirts({ allproducts }) {
  // console.log(allproducts)

  return (
    <section className="text-gray-600 body-font">


      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap m-5">
          <h1>this is tshort </h1>
          {allproducts.map((eachproduct) => {

            return <div key={eachproduct._id} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <Link href={`/products/${eachproduct.slug}`} className="block relative  rounded overflow-hidden  md:h-[50vh]  bg-slate-500 ">
                <img alt="ecommerce" className=" object-top w-full h-full block" src="https://m.media-amazon.com/images/I/61MPGbBpC3L._UY741_.jpg" />
              </Link>
              <div className="mt-4 md: text-center p-2">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">title: {eachproduct.title} </h3>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"> category: {eachproduct.category}  </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Size: {eachproduct.size} </h2>
                <p className="mt-1">price: {eachproduct.price}</p>
              </div>
            </div>
          })}
        </div>
      </div>

    </section>
  )
}

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {

    await mongoose.connect('mongodb+srv://20it88:Dhruvin%40123@cluster0.vidlpb4.mongodb.net/djvmerchF')
      .then(() => { console.log('mongoDB database connected sucessfully from djvmerchF>products') })
      .catch((err) => { console.log(err) });
  }

  let allproducts = await Products.find({category:'tshirt'});


  return {
    props: { allproducts: JSON.parse(JSON.stringify(allproducts)) }, // will be passed to the page component as props
  };
}


export default tshirts
