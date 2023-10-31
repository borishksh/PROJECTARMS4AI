import React from 'react'

export default function Section3(args) {
  return (
    <div className='section1'>
        <h1>{args[0]}</h1>
        <p className='section1-p'>
        {args[1]}
        </p>
        <div className='section1-details'>
            <div className='section1-details-text'>
                <h2>{args[2]}</h2>
                <p>
                {args[3]}
                </p>
            </div>
            <div className='section1-details-image'>

            </div>
        </div>
        <div className='section1-details'>
            <div className='section1-details-text'>
                <h2>{args[4]}</h2>
                <p>
                {args[5]}
                </p>
            </div>
            <div className='section1-details-image'>

            </div>
        </div>
    </div>
  )
}
