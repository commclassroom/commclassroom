import React from 'react'
import Carousel from "react-elastic-carousel";
import './Testimonials.css';

import {data} from './data'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

const Testimonials = () => {

    
    return (
        <div className='testimonials'>
            <div className='test-heading'>
                <h1>WHAT COMMUNITY SAYS ABOUT US?</h1>
            </div>

            <div className='test-comments'>
                <Carousel breakPoints={breakPoints}>
                    {data.map((item)=>(
                        item.map((testimonial)=>(
                            <div className='test-single'>
                                <p>{testimonial.message}</p>
                                <h3>{testimonial.name}</h3>
                                <h5>{testimonial.position}</h5>
                            </div>
                        ))
                    ))}
                </Carousel>
            </div>
            <div className='test-pagination'>
                <div className='pagemark'></div>
                
            </div>
        </div>
    )
}

export default Testimonials

