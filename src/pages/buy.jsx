"use client"
import React,{useState} from "react";

const Buy = () => {

  const checkoutHandler = async (amount) => {

    const { data: { key } } = await axios.get("http://www.localhost:3000/api/getkey")

    const { data: { order } } = await axios.post("http://localhost:3000/api/razorpay", {
        amount
    })

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "6 Pack Programmer",
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: "http://localhost:3000/api/paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}

return (
    <>

        <div h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
          <button checkoutHandler={checkoutHandler}>2000</button>
          <button checkoutHandler={checkoutHandler}>4000</button>
        </div>
    </>
)
};

export default Buy;