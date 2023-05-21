import React from 'react'
import Image from 'next/image'

import bg from '../../public/quickbg.jpg'

const Hero = () => {
  return (
    <div >
      <Image src={bg} alt='main photo' className='object-cover h-screen '></Image>
    </div>
  )
}

export default Hero
