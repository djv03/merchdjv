import React from 'react'
import Image from 'next/image'

import bg from '../../public/hdbg.jpg'

const Hero = () => {
  return (
    <div >
      <Image src={bg} className='object-cover h-screen opacity-50'></Image>
      <h1>helooooooo </h1>
    </div>
  )
}

export default Hero
