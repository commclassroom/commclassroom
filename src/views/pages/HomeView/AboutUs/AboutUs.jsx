import React from 'react'
import balloon from '../../../../assets/images/ballon.png'
import group from '../../../../assets/images/Group55.png'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='AboutUs'>
            <div className='AboutUs-heading'>
                <h2>What makes our FREE courses much better than most of the PAID courses ?</h2>
            </div>

            <div className='balloon'>
                <img src={balloon} alt='balloon' />
            </div>

            <div className='AboutUs-section'>
                <img src={group} alt='Group55' />
                <div className='AboutUs-content'>
                    <h1>About Us</h1>
                    <p>We believe that every student, irrespective of their college or branch, can make it big. Community Classroom is an initiative built on this thought. The organisation is founded by Kunal Kushwaha and Rahul Rana. We provide hands-on training, mentorship and have an inclusive community.</p>
                    <p>All of our courses are FREE and better than most paid courses. We cover every topic in detail and mentor you to stand out and get opportunities by breaking all the barriers.</p>
                    <p>Get expert guidance with career, Open Source, and internships, jobs around the world.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
