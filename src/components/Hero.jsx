import React from 'react'
import Image from 'next/image'

import bg from '../../public/quickbg.jpg'
import { useState } from 'react'
import styles from '../styles/carousel.module.css'

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Hero = () => {
const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const totalSlides = 3; 

  return (
    <div >
      <div className={styles.carousel}>
      <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <div className={styles.slide}>
      <Image src={bg} alt='main photo' className='object-cover h-[100vh]'></Image>
        </div>
        <div className={styles.slide}>
      <Image src={bg} alt='main photo' className='object-cover h-[100vh]'></Image>
        </div>
        <div className={styles.slide}>
      <Image src={bg} alt='main photo' className='object-cover h-[100vh]'></Image>
        </div>
      </div>
      <button  className={`${styles.prev} ${styles.button}`} onClick={handlePrev}>
      <FaArrowCircleLeft />
      </button>
      <button className={`${styles.next} ${styles.button}`} onClick={handleNext}>
      <FaArrowAltCircleRight />
      </button>
    </div>
    </div>
  )
}

export default Hero
