import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <>
        <Html lang="en" className='overflow-x-hidden'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    <Script src="https://checkout.razorpay.com/v1/checkout.js"
    />
    </>
  )
}
