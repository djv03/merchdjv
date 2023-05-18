import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState({})
  const [total, setTotal] = useState(0);


  useEffect(() => {
    console.log('printing from _app.js');

    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
        saveCart(JSON.parse(localStorage.getItem('cart')));
      }
    } catch (error) {
      console.log('unexpected error occured');
      localStorage.clear()
    }

  }, [])

  // task 1. save a product to cart and localstorage
  const saveCart = (mycart) => {
    // task 1.1 saving cart to the localstorage for persitance data
    localStorage.setItem('cart',JSON.stringify(mycart) );

    //task 1.2 getting total prize of cart
    let total=0;

    //note to myself: Object.keys() is a built-in method that is used to retrieve an array of all the enumerable property titles of an object.
                      // matlab sari keys ka array bana dega, you can check this by
    
    console.log( (Object.keys(mycart)).length ) //this will give length array of all the keys in the mycart
    for (let index = 0; index < Object.keys(mycart).length; index++) {
      total+=mycart[Object.keys(mycart)[index] ].price *mycart[Object.keys(mycart)[index]].qty;
    }
    setTotal(total)
  }

  //task 2. adding product to the cart
  const addtoCart = (productid, qty, price, title, size, variant) => {

    
    let newcart = cart
    if (productid in cart) {
      newcart[productid].qty = cart[productid].qty + qty
    } else {
      newcart[productid] = {productid, qty: 1, price, title, size, variant }
    }
    setCart(newcart);
    saveCart(newcart);
  }
  // task 3. remove a specific product from cart
  const removefromCart = (productid, qty, price, title, size, variant) => {
    let newcart = cart
    if (productid in cart) {
      newcart[productid].qty = cart[productid].qty - qty
    }
    //task 3.1 delete that item(object) form cart array which has quantity <=0 
    if (newcart[productid].qty <= 0) {
      delete newcart[productid]
    }
    setCart(newcart);
    saveCart(newcart);
  }

  //task 4. clear the cart
  const clearCart = () => {
    setCart({})
    saveCart({})
  }


  return <><Navbar cart={cart}  addtoCart={addtoCart} removefromCart={removefromCart} clearCart={clearCart} total={ total}/>
    <Component cart={cart}  addtoCart={addtoCart} removefromCart={removefromCart} clearCart={clearCart} total={total} {...pageProps}  />
    <Footer />
  </>
}
