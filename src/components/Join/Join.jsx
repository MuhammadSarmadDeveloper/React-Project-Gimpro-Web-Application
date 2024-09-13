import React, { useRef } from 'react'
import './Join.css'
import emailjs from'@emailjs/browser'
const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0rf7jo4', 'template_nenw0vh', form.current, '6-GYIAulVSv5hwvgz')
      .then(
        () => {
          alert('Join now Successful.Your Email is Sending!');
        },
        (error) => {
         alert('Join now Failure.Because Some Internet Issues.');
        }
      );
  };
  return (
    <div className='Join' id='join-us'>
      <div className="left-j">
        <hr/>
        <div>
            <span className='stroke-text'>READY TO </span>
            <span>LEVEL UP </span> 
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input  type='email' name='user_email' placeholder='Enter Your Email'/>
          <button  className='btn btn-j'>Join now</button>
        </form>
      </div>
    </div>
  )
}




export default Join
