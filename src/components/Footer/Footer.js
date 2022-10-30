import React from 'react';
import './Footer.css';
import footerLogo from '../../assets/footerLogo.svg';

export default function Footer() {
  return (
    <div className='footer-body'>
        <img src={footerLogo} alt='Barnali Logo' />
        <br/><br/><br/>
        <p>Copyrigts to Barnali Dance Academy</p>
    </div>
  )
}
