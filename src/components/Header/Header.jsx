import React, { useState } from 'react'
import './Header.css'
import bars from '../../assets/bars.png'
import Logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
const Header = () => {
  const mobile=window.innerWidth<=768 ? true:false;
  const [menuOpened,setManuOpened]=useState(false)
  return (
    <div className="header">
        <img src={Logo} alt='' className='logo'/>
        {(menuOpened===false && mobile===true) 
        ?(<div className='bars' onClick={()=>setManuOpened(true)} style={{backgroundColor:'var(--appColor)',padding:'0.5rem',borderRadius:'5px'}}>
          <img src={bars} style={{width:'1.5rem', height:'1.5rem'}}alt="" /></div>)
        : <ul className='header-menu'>
        <li>
        <Link  onClick={()=>setManuOpened(false)} 
        to='hero' 
        spy={true} 
        smooth={true}>Home</Link></li>
        <li onClick={()=>setManuOpened(false)}>Programs</li>
        <li onClick={()=>setManuOpened(false)}>Why us</li>
        <li onClick={()=>setManuOpened(false)}>Plans</li>
        <li><Link 
        onClick={()=>setManuOpened(false)} 
        to='Testimonials' 
        spy={true} 
        smooth={true}
        >Testimonials</Link></li>
    </ul>}
        
    </div>
  )
}

export default Header
