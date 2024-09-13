import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whitetick from'../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="Programs-Header" style= {{gap:"1rem", marginTop:"-5rem"}} >
            <span className='stroke-text'>Ready to Start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>Now Withus</span>
        </div>
        <div className="Plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={i}>
                    {plan.icon} 
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature,i) =>(
                            <div className="feature">
                                <img src={whitetick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}    
                    </div>
                    <div>
                        <span>See more benefits </span>
    
                    </div>
                        <button className="btn" >Join now</button> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans
