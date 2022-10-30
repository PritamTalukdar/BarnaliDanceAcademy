import React from 'react';
import danceVideo from '../../assets/dance.mp4';
import './VideoTile.css'; 


export default function VideoTile() {
  return (
    <div className='video-tile'>
        <video autostart autoPlay muted loop id="danceVideo">
            <source src={danceVideo} type="video/mp4" />
        </video>
        <div class="content">
            <h1>dance</h1>
            <h1>dance</h1>
            <h1>dance.</h1>
            <button><b>Admissions</b></button>
            <button><b>Workshops</b></button>
        </div>
    </div>
  )
}
