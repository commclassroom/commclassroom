import React from 'react'
import Carousel from "react-elastic-carousel";

import {data} from '../../data/HomeViewData/homeviewdata'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2},
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

const Testimonials = () => {

    
    return (
        <div className='px-14 py-24 font-redHatDisplay'>
            <div className='text-center'>
                <h1 className='text-4xl mb-4 font-semibold'>WHAT COMMUNITY SAYS ABOUT US?</h1>
            </div>

            <div className='flex max-w-7xl p-16 justify-evenly m-auto'>
                <Carousel breakPoints={breakPoints}>
                    {data.map((item)=>(
                        item.map((testimonial)=>(
                            <div className='text-left px-6' key={item.id}>
                                <p className='italic pb-4'>{testimonial.message}</p>
                                <h3 className='m-0 font-semibold'>{testimonial.name}</h3>
                                <h5 className='m-0 font-light'>{testimonial.position}</h5>
                            </div>
                        ))
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonials

