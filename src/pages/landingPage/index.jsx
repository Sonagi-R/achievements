import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './index.css'
import { NavLink } from 'react-router-dom';

export default function landingPage() {

  return (
    <div>
        <AwesomeSlider fillParent infinite bullets={false}>
            <div className='img-1'>
                <div className='content-block'>
                    <h1>Welcome</h1>
                    <i className="fa-solid fa-solid-land fa-trophy trophy" title='trophy'></i>
                    <p className='landing-desc'>It's time to achieve perfection.</p>
                    <NavLink to="/games" className="">
                        <h4>Game on</h4>
                    </NavLink>
                </div>
            </div>
            <div className='img-2'>
                <div className='content-block'>
                    <h1>Get busy gaming</h1>
                    <i className="fa-brands fa-solid-land fa-steam steam" title="steam"></i>
                    <p className='landing-desc'>All games and achievements earned in one place.</p>
                </div>
            </div>
            <div className='img-3'>
                <div className='content-block'>
                    <h1>Make your steam achievements mean something!</h1>
                    <p>
                        <i className="fa-brands fa-solid-land fa-steam steam" title="steam"></i>
                        <i class="fa-solid fa-solid-sign fa-plus"></i>
                        <i className="fa-solid fa-solid-land fa-trophy trophy" title='trophy'></i>
                        <i class="fa-solid fa-solid-sign fa-equals"></i>
                        <i className="fa-solid fa-solid-land fa-cart-shopping cart" title="cart"></i>
                    </p>
                    <p className='landing-desc'>Earn credits for every achievement</p>
                </div>
            </div>
        </AwesomeSlider>
    </div>
    
  )
}
