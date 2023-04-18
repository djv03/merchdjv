import React from 'react'
import Image from 'next/image'

import bg from '../../public/hdbg.jpg'

const Hero = () => {
  return (
    <div >
      <Image src={bg} alt='main photo' className='object-cover h-screen '></Image>
      <h1>helooooooo </h1>
    </div>
  )
}

export default Hero
