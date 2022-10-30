import React from 'react';
import { courses } from '../../constants/mockJson';
import CourseCard from './CourseCard';
import './CoursesTile.css';

export default function CoursesTile() {
  return (
    <div className='courses-tile'>
      <p>We teach ...</p>
      <div className='courses'>
        {courses.map((course) => {
          console.log(course)
          return (
            <CourseCard course={course} key={course.id} />
          )
        }
        )}
      </div>
      
    </div>
  )
}
