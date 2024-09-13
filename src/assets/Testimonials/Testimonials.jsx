import React, { useState } from 'react'
import './Testimonials.css'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {testimonialsData} from '../../data/testimonialsData'
import {motion} from 'framer-motion'
const Testimonials = () => {
  const transition={type:'spring',duration:3}
  const [selected,setSelected]=useState(0);
  const tLength=testimonialsData.length;
  return (
    <div className='Testimonials'>
      <div className="left-t">
        <span style={{color:'black',textstyle:'bold'}}>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>Say about us</span>
        <motion.span key={selected} 
            initial={{ opacity: 0, x: 100 }} /* Initial position: fully transparent and shifted 100 pixels to the right */
            animate={{ opacity: 1, x: 0 }} /* Animation to fully opaque and no horizontal shift */
            exit={{ opacity: 0, x: -100 }} /* Exit position: fully transparent and shifted 100 pixels to the left */
            transition={transition}>
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className='font-1' style={{color:'var(--orange)',fontWeight:'700' ,fontSize:'26px',alignItems:'center'}}>
            {testimonialsData[selected].name}
            </span>{" "}
             - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div className='border-1' transition={{...transition, duration:2}} initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}}></motion.div>
        <motion.div className='border-2' transition={{...transition, duration:2}} initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}}></motion.div>
        <motion.img 
  key={selected} 
  initial={{ opacity: 0, x: 100 }} /* Initial position: fully transparent and shifted 100 pixels to the right */
  animate={{ opacity: 1, x: 0 }} /* Animation to fully opaque and no horizontal shift */
  exit={{ opacity: 0, x: -100 }} /* Exit position: fully transparent and shifted 100 pixels to the left */
  transition={transition} 
  src={testimonialsData[selected].image} 
  alt=''/>
        <div className='arrows'>
          <img onClick={()=>{selected===0? setSelected(tLength - 1):setSelected((pre)=>pre - 1);}} src={leftArrow} alt="" />
          <img onClick={()=>{selected===tLength - 1? setSelected(0):setSelected((pre)=>pre + 1);}} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
