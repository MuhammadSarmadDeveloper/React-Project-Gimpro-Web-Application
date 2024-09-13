import React from 'react'
import './Hero.css'
import Hero_image from '../../assets/hero_image.png'
import Calories from '../../assets/calories.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'

import Header from '../Header/Header'

const Hero = () => {
  const transition={type:'spring',duration:3}
  const mobile=window.innerWidth<=768 ? true : false;
  return (
    
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div initial={{left:mobile? '165px':'238px'}} whileInView={{left:'8px'}} transition={{...transition,type:'tween'}}>
             
          </motion.div>
          <span>The best fitness Club in the Town </span>
        </div>

        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>Fostering inclusive fitness for holistic community well-being and resilience.</span>
          </div>
        </div>

        <div className='figuries'>
          <div>
            <span><NumberCounter end={140} start={100} delay='4' preFix="+"/></span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={900} delay="4" preFix="+"/></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={30} delay='4' preFix="+"/></span>
            <span>fitness programs</span>
          </div>
        </div>
      <div className="hero-buttons">
        <div className="btn">Get Started</div>
        <div className="btn">Learn More</div>
      </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div transition={transition} initial={{right:'-1rem'}} whileInView={{right:'4rem'}} className="heart-rate">
         <img src={Heart} alt=''/>
          <span>Heart Rate</span><span>116 Bpm</span>

        </motion.div>
        <img src={Hero_image} alt="" className="hero-image" />
        <motion.img transition={transition} initial={{right:'35rem'}} whileInView={{right:'26rem'}} src={hero_image_back} alt="" className="hero-image-back" />

        <motion.div transition={transition} initial={{right:'45rem'}} whileInView={{right:'37rem'}} className='calories'>
        <img src={Calories} alt=""/>
        <div>
        <span>Calories Burned</span><span>220 kcal</span>
        </div>
        </motion.div>
      </div> 
    </div>

  )
}

export default Hero
