import React from 'react';
import './CategoryTile.css';
import { categories } from '../../constants/mockJson';
import arrow from '../../assets/arrow.svg';

export default function CategoryTile() {
  return (
    <div className='category-tile'>
        {categories.map((category) => {
          return (
            <div key={category.id} className='category-card'>
              <img className='category-img' src={require(`../../assets/${category.url}.png`)} alt={category.name} />
              <p>Group Classes</p>
              <div className='enroll-btn'>
                <p>Enroll Now</p>
                <img src={arrow} alt='arrow'/>
              </div>
            </div>
          );
        })}
    </div>
  )
}
