import React from 'react';
import '../Styling/progress.css';

const ProgressBar = ({progress}) => {
  return (
    <div className='container'>
        <div className='progress-fill' style={{ transform : `translateX(${progress - 100}%)`}}/>
    </div>
  )
}

export default ProgressBar