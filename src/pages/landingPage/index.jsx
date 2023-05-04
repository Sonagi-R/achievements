import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './index.css'

export default function landingPage() {

  return (
    <div>
        <AwesomeSlider fillParent infinite bullets={false}>
            <div className='img-1'>
                <div className='content-block'>
                    <h1>Welcome</h1>
                    <i className="fa-solid fa-trophy trophy" title='trophy'></i>
                    <p>It's time to achieve greatness.</p>
                </div>
            </div>
            <div className='img-2'>
                <div className='content-block'>
                    <h1>Get Gaming</h1>
                </div>
            </div>
            <div className='img-3'>
                <div className='content-block'>
                    <h1>Make Achievments mean something</h1>
                </div>
            </div>
        </AwesomeSlider>
    </div>
    
  )
}
