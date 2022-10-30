import React from 'react';
import VideoTile from '../components/VideoTile/VideoTile';
import CoursesTile from '../components/CoursesTile/CoursesTile';
import CategoryTile from '../components/CategoryTile/CategoryTile';
import HeritageTile from '../components/HeritageTIle/HeritageTile';
import Footer from '../components/Footer/Footer';

export default function MainBodyContainer() {
    return (
        <div className='main-body-container'>
            <VideoTile />
            <CoursesTile />
            <CategoryTile />
            <HeritageTile />
            <Footer />
        </div>
    )
}
