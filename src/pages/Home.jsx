import React from 'react'
import bg from '../../public/quickbg.jpg'
import Image from 'next/image'
function Home() {
  return (
    <div>
      <Image src={bg} alt='main bg'/>
    </div>
  )
}

export default Home
