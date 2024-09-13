import React from 'react';
import './BackgroundVideo.css'; // Import CSS for styling
import video from '../../assets/Video/Fit.mp4'
import video2 from '../../assets/Video/Fit2.mp4'
import em from '../../assets/email.png'
import pho from '../../assets/pho.png'
import {motion} from 'framer-motion'
import pay from '../../assets/pay.png'
import mas from '../../assets/mas.png'
import side from '../../assets/side.png'
const BackgroundVideo = () => {
  const transition={type:'spring',duration:3}
  return (
    <div className="background-video-container">
      <div>
        <div className='footer-div'>
          <motion.div className="side-logo" 
          transition={{...transition, duration: 3}} // Set the duration of the transition
            initial={{ left: '-2rem' }}  // Initial position of the image
            animate={{ left: '-3rem' }}   // Final position of the image
           whileInView={{ left: '3rem' }}>
             
            <img  src={side} style={{ width: '16rem' }} />
            
              <div className='uli'>
              <span> <li>Expert-led fitness programs</li></span>
              <span><li>State-of-the-art equipment</li></span>
              <span><li>Personalized training sessions</li></span>
              <span><li>Group fitness classes available</li></span>
              <span><li>Comprehensive wellness assessments</li></span>
              <span><li>Community-focused fitness culture</li></span>
              </div>

          </motion.div>
          
          <div className="f-part1">
            <span>Company</span>
            <span>About Us</span>
            <span>Services</span>
            <span>Community</span>
            <span>Testimonial</span>
          </div>
          <div className="f-part2">
            <span>Support</span>
            <span>Help Center</span>
            <span>Tweet @ Us</span>
            <span>Webians</span>
            <span>Feedback</span>
            <form className="sub" >
              <input type="text" id="card-number" placeholder="XXXX-XXXX-XXXX-XX" maxlength="19" autocomplete="off"/>
              <button type='submit' className='bt'><img src={mas} alt/></button>
              
            </form>
          </div>
          <div className="f-part3">
            <span>Links</span>
            <span>Courses</span>
            <span>All in One</span>
            <span>Become a Trainer</span>
            <span>Fitness Dite</span>
          </div>
          <div className="f-part4">
            <span>Contact Us</span>
            <img src={em} alt="" /> <span> sarmadakhtar521@gmail.com</span>
            <img src={pho} alt=""/> <span>1192-7455-09 , 0324-4642188</span>
            
            <form className="sub-container" >
              <input type='email' name='user_email' placeholder='Enter Your Contact Id' />
              <button className='btn btn-j'>Subscribe Now</button>            
            </form>
          </div>
        </div>
        <video autoPlay muted loop className="background-video-1">
          <source src={video2} type="video/mp4" />


        </video>

      </div>
      <div>
        <video autoPlay muted loop className="background-video-2">
          <source src={video} type="video/mp4" />

        </video>
      </div>
      {/* Add ot
      {/* Add ot
      {/* Add other content on top of the video if needed */}
    </div>
  );
}

export default BackgroundVideo;
