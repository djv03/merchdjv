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
          {Object.keys(allproducts).map((eachproduct) => {

            return <div key={eachproduct._id} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <Link href={`/products/${allproducts[eachproduct].slug}`} className="block relative  rounded overflow-hidden  md:h-[50vh]  bg-slate-500 ">
                <img alt="ecommerce" className=" object-top w-full h-full block" src={allproducts[eachproduct].img} />
              </Link>
              <div className="mt-4 md: text-center p-2">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">title: {allproducts[eachproduct].title} </h3>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"> category: {allproducts[eachproduct].category}  </h3>
                <p className="mt-1">price: {allproducts[eachproduct].price}</p>
                <div className="text-gray-900 title-font text-lg font-medium">
                 {allproducts[eachproduct].size.includes('S') && <span className='border border-gray-500 mx-1 px-1'>S</span>}
                 {allproducts[eachproduct].size.includes('M') && <span className=' border border-gray-500 mx-1 px-1'>M</span>}
                 {allproducts[eachproduct].size.includes('L') && <span className='border border-gray-500 mx-1 px-1'>L</span>}
                 {allproducts[eachproduct].size.includes('XL') && <span className='border border-gray-500 mx-1 px-1'>XL</span>}
                 {allproducts[eachproduct].size.includes('XXL') && <span className='border border-gray-500 mx-1 px-1'>XXL</span>}
                </div>
                <div className="text-gray-900 title-font text-lg font-medium mt-1">
                  
                 {allproducts[eachproduct].color.includes('black') && <button className='border-2 bg-black rounded-full w-6 h-6 '></button>}
                 {allproducts[eachproduct].color.includes('sky') && <button className='border-2 bg-sky-300 rounded-full w-6 h-6 '></button>}
                 {allproducts[eachproduct].color.includes('red') && <button className='border-2 bg-red-600 rounded-full w-6 h-6 '></button>}
                 {allproducts[eachproduct].color.includes('grey') && <button className='border-2 bg-gray-400 rounded-full w-6 h-6 '></button>}
                 {allproducts[eachproduct].color.includes('green') && <button className='border-2 bg-green-600 rounded-full w-6 h-6 '></button>}
                </div>
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
  
  let alltshirts={}
  for (let item of allproducts) {
    if (item.title in alltshirts) {
      console.log('pushing into array array');
      console.log("type is:"+typeof(alltshirts[item.title].color) )
      if ( !alltshirts[item.title].color.includes(item.color) && item.availableQty>0) {
        alltshirts[item.title].color.push(item.color)
      }
      if ( !alltshirts[item.title].size.includes(item.size) && item.availableQty>0) {
        alltshirts[item.title].size.push(item.size)
      }
    } 
    else {
      alltshirts[item.title]=  JSON.parse(JSON.stringify(item))
      
      if (item.availableQty>0) {
        console.log('array is created');
        alltshirts[item.title].color=[item.color]
        alltshirts[item.title].size=[item.size]
      }
    }
  }


  return {
    props: { allproducts: JSON.parse(JSON.stringify(alltshirts)) }, // will be passed to the page component as props
  };
}


export default tshirts
