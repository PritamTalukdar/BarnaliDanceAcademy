import React from 'react';
import './HeritageTile.css';
import heritage from '../../assets/heritage.png';
import history from '../../assets/history.png';
import arrow from '../../assets/arrow.svg';

export default function HeritageTile() {
  return (
    <div className='heritage-tile'>
        <div className='our-heritage'>
            <div className='our-heritage-left'>
                <img src={heritage} alt='our heritage' />
            </div>
            <div className='our-heritage-right'>
                <h4>Our Heritage</h4>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                </p>
            </div>
        </div>
        <div className='our-history'>
            <div className='our-history-left'>
                <h4>Our History</h4>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                </p>
                <br/>
                <div className='upcoming-show-btn'>
                    <p>Upcoming shows & workshops</p>
                    <img src={arrow} alt='arrow'/>
                </div>
            </div>
            <div className='our-history-right'>
                <img src={history} alt='our history' />
            </div>
        </div>
    </div>
  )
}
