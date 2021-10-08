// main course page goes here
import React from 'react'
import Left from '../../../components/Hero/Left.jsx'
import Right from '../../../components/Hero/Right.jsx'

const Hero = () => {
  return (
    // Main div
    <div>
      <div className="font-redHatDisplay flex flex-row">
        <Left />
        <Right />
      </div>
    </div>
  )
}

export default Hero
