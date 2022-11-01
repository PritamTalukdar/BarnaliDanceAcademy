import React from 'react';
import './CourseCard.css';

export default function CourseCard(props) {
  const { url, title, description } = props.course;
  return (
    <div className='course-card'>
        <img src={require(`../../assets/${url}.png`)} alt={title} />
        <div>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    </div>
  )
}
