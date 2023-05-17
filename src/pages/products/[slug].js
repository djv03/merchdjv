import { useRouter } from 'next/router'
import { useState } from 'react'
import mongoose from 'mongoose'
import Product from '../../../modals/Product'
const Post = ({ addtoCart, product, variants }) => {
  // console.log('product is:');
  // console.log(product);
  // console.log('varinats are:');
  // console.log(variants);
  const router = useRouter()
  const { slug } = router.query
  console.log(slug);
  const [pin, setPin] = useState();
  const [isavailable, setIsavailable] = useState();


  const typePin = (e) => {
    // console.log('typing');

    setPin(e.target.value);

  }
  const checkPin = async () => {
    // console.log('checking')

    let allPins = await fetch('http://localhost:3000/api/pincode');
    let pinJson = await allPins.json();

    if (pinJson.includes(parseInt(pin))) {
      setIsavailable(true);
    } else {
      setIsavailable(false);
    }

  }

  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);


  const refreshPage=(newSize,newColor)=>{
    console.log("kjhgc");
    setSize(newSize)
    setColor(newColor)
    // setSize()
    router.replace(`http://localhost:3000/products/${variants[newColor][newSize]['slug']}`)
    // let url=`http://localhost:3000/product/${variants[newColor][newSize]['slug']}`
    // window.location=url;
  }
  return <>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full px-16 object-contain object-top rounded" src="https://m.media-amazon.com/images/I/61MPGbBpC3L._UY741_.jpg" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Colors</span>

                {Object.keys(variants).includes('red')     && Object.keys(variants['red']).includes(size)     && <button onClick={()=>{refreshPage(size ,'red' )}} className={`border-2 bg-red-700 rounded-full w-6 h-6 focus:outline-none ${color==='red'?'border-black':'border-gray-500'} `}></button> }
                {Object.keys(variants).includes('green') && Object.keys(variants['green']).includes(size)     && <button onClick={()=>{refreshPage(size,'green')}} className={`border-2 bg-green-700 rounded-full w-6 h-6 focus:outline-none ${color==='emerald'?'border-black':'border-gray-500'} `}></button>}
                {Object.keys(variants).includes('blue')    && Object.keys(variants['blue']).includes(size)    && <button onClick={()=>{refreshPage(size,'blue')}} className={`border-2 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${color==='blue'?'border-black':'border-gray-500'} `}></button>}
                {Object.keys(variants).includes('yellow')  && Object.keys(variants['yellow']).includes(size)  && <button onClick={()=>{refreshPage(size,'yellow')}} className={`border-2 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${color==='yellow'?'border-black':'border-gray-500'} `}></button>}
                {Object.keys(variants).includes('purple')  && Object.keys(variants['purple']).includes(size)  && <button onClick={()=>{refreshPage(size,'purple')}} className={`border-2 bg-purple-500 rounded-full w-6 h-6 focus:outline-none ${color==='purple'?'border-black':'border-gray-500'} `}></button>}
                {Object.keys(variants).includes('black')   && Object.keys(variants['black']).includes(size)   && <button onClick={()=>{refreshPage(size,'black')}} className={`border-2 bg-black  rounded-full w-6 h-6 focus:outline-none ${color==='black'?'border-black':'border-gray-500'} `}></button>}
                {Object.keys(variants).includes('gray')     && Object.keys(variants['gray']).includes(size)   && <button onClick={()=>{refreshPage(size,'gray')}} className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none ${color==='gray'?'border-black':'border-gray-500'} `}></button>}

              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select value={size} onChange={(e)=>{refreshPage(e.target.value,color)}} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500 text-base pl-3 pr-10">
                {/* {console.log('form color part:')}
                    {console.log(variants[color])} */}
                    {Object.keys(variants[color]).includes('S') && <option value={'S'}>S</option>}
                    {Object.keys(variants[color]).includes('M') && <option value={'M'}>M</option>}
                    {Object.keys(variants[color]).includes('L') && <option value={'L'}>L</option>}
                    {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>XL</option>}
                    {Object.keys(variants[color]).includes('XXL') && <option value={'XXL'}>XXL</option>}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">₹ 580</span>
              <button onClick={() => { addtoCart(slug, 3, 799, "xl", "green") }} className="flex ml-auto text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded">Add to cart</button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
            <div className='pincode mt-4'>
              <input type="text" placeholder='enter Pincode for check' className=' p-2 border-2 border-gray-950 rounded-md' onChange={typePin} />
              <button className='rounded px-6 py-2 m-4 bg-emerald-300  hover:bg-emerald-400' onClick={checkPin}>check</button>

              {!isavailable &&
                <div className='text-red-500'>Sorry! we are not available yet</div>

              }
              {isavailable &&
                <div className='text-green-500'>Yay!!! Your product would deliver soon</div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {

    await mongoose.connect('mongodb+srv://20it88:Dhruvin%40123@cluster0.vidlpb4.mongodb.net/djvmerchF')
      .then(() => { console.log('mongoDB database connected sucessfully from djvmerchF>products') })
      .catch((err) => { console.log(err) });
  }

  let product = await Product.findOne({ slug: context.query.slug });
  console.log('slug is: ')
  console.log( context.query.slug);
  let variants = await Product.find({ title: product.title })
  console.log('title is: ')
  console.log( product.title);
  let colorSizeSlug = {} //{red:{XL:{slug:'wear-the-code-XL}}}

  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    } else {
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
  }
 

  console.log('colorSizeSlug is:')
console.log(colorSizeSlug)


  return {
    props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) }, // will be passed to the page component as props
  };
}


export default Post