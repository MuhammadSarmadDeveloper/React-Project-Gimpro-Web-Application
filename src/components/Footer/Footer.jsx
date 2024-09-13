import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import insta from '../../assets/instagram.png'
import link from '../../assets/linked.png'

const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr/>
      <div className='footer'>
        <div className='social'>
       
        <img src={github} alt="" />
        <img src={insta} alt="" />
        <img src={link} alt="" />
        </div>
        <span>Follow More</span>
    </div>
    </div>
  )
}

export default Footer
