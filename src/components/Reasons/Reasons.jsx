import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png'
import Under from '../../assets/under.png'
const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>Some Reasons</span>
                <div>
                    <span className='stroke-text'>Why</span>
                    <span>  Choose us?</span>
                </div>

                <div className='details-r'>
                <div>
                    <img src={tick} alt=""/>
                    <span>OVER +140 EXPERT COACHS</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>TRAIN SMARTER AND FASTER BEFORE</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 NEW PROGRAM FREE FRO MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>RELIABLE PARTNERS</span>
                </div>
                </div>
                <span className='our' style={{
                    color:"var(--lightgray)",
                    fontWeight: "normal",
                    fontSize:"1rem"
                }}>OUR PARTNERS</span>
                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                    <img src={Under} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons
