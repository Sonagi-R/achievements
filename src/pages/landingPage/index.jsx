import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './index.css'

export default function landingPage() {

  return (
    <div>
        <AwesomeSlider fillParent infinite bullets={false}>
            <div className='img-1'>
                <h1>Welcome</h1>
            </div>
            <div className='img-2'>
                <h1>Slide 2</h1>
            </div>
            <div className='img-3'>
                <h1>Get going with achievements</h1>
            </div>
        </AwesomeSlider>
    </div>
    
  )
}
