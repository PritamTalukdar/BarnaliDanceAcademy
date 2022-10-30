import React from 'react';
import './TopBar.css';
import topBarLogo from '../../assets/topBarLogo.svg';

export default function TopBar() {
  return (
    <div className='top-bar-container'>
        <div className='top-bar-left-section'>
            <img src={topBarLogo} alt='barnali logo' />
        </div>
        <nav className='top-bar-right-section'>
            <div>Home</div>
            <div>Admissions</div>
            <div>Workshops</div>
            <div>Fee Payment</div>
            <div>Sign Up</div>
            <div>Log in</div>
        </nav>
    </div>
  )
}
