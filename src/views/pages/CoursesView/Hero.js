// main course page goes here
import React from 'react'
import heroImage from '../../../assets/static/react-web-designs/Hero_center_image.png'   
import appStore from '../../../assets/static/react-web-designs/appstore_logo.svg'   
import playStore from '../../../assets/static/react-web-designs/playstore_logo.svg'   
import logo from '../../../assets/images/logo.png' 
import discord from '../../../assets/images/discord.svg'
import linkedin from '../../../assets/images/linkedin.svg'
import Twitter from '../../../assets/images/Twitter.svg'
import YouTube from '../../../assets/images/YouTube.svg'
import left from '../../../assets/images/left.png'
import right from '../../../assets/images/right.png'
import menu from '../../../assets/images/Menu.svg'
import gotocourse from '../../../assets/images/gotocourse.svg'


const Hero = () => {
    return (
        // Main div
        <div>
          <div className="font-redHatDisplay flex flex-row">

                <div className="h-screen w-1/3 bg-fifth">

                     {/* Left div */}

                    <div className="flex justify-start mx-20 my-10">
                        <img src={logo} />
                        <img className="absolute" style={{"marginLeft":"10px", "marginTop":"245px"}} src={gotocourse}/>
                    </div>

                     {/* Right div */}

                    <div className="container relative left-1/2 m-0 bottom-10 box-border h-2/3 w-auto">
                        {/* absolute div content*/}
                        <img src={heroImage} className="h-full w-full" />

                            <div className='flex justify-between w-full'>
                                <div className="inline">
                                    <ul className='flex justify-start mx-10 items-center'>
                                        <li className='py-2 pr-4'><img src={Twitter} alt='logo'/></li>
                                        <li className='py-2 pr-4'><img src={linkedin} alt='logo'/></li>
                                        <li className='py-2 pr-4'><img src={YouTube} alt='logo'/></li>
                                        <li className='py-2 pr-4'><img src={discord} alt='logo'/></li>
                                    </ul>  
                                </div>
                                <div className="flex flex-row justify-end mx-4">
                                     <button className="bg-fifth h-5"> <img src={left} className="text-fourth"  style={{"height":"10px", "width":"20px" , "-webkit-filter": "grayscale(1) invert(1)", "filter": "grayscale(1) invert(1)" }} /> </button>
                                     <button className="bg-fifth mx-4 h-5"> <img src={right} className="bg-fourth" style={{"height":"10px", "width":"20px" ,"-webkit-filter": "grayscale(1) invert(1)", "filter": "grayscale(1) invert(1)" }}  /> </button>
                                </div>    
                            </div>
                            
                    </div>
                </div> 
                
                {/* Right Div content */}

                <div className="h-screen w-2/3 bg-fourth">
                    <div  className="flex justify-end mx-8 my-16">
                        <img src={menu} />
                    </div>
                    
                    <div className="" style={{"height":"fit-content", "width":"auto", "marginLeft":"20vw", "marginTop":"20.5vh"}}>
                        <h1 className="text-4xl my-2 font-bold tracking-widest">Quality Education.</h1>
                        <h1 className="text-4xl my-2 font-bold tracking-widest">Free for all.</h1><br/>
                        <h3 className="font-bold">We provide FREE hands-on training,</h3>
                        <h3 className="font-bold">mentorship and have an inclusive community.</h3>
                        <button className="bg-secondary w-20 my-3 rounded-lg p-1 font-bold " style={{"boxShadow":"0 4px 4px 0 rgba(128, 183, 200, 0.4), 0 6px 10px 0 rgba(128, 183, 200, 0.4)"}} >Join us</button>
                        <br/>
                        <h3 className="font-bold font-medium shadow-2xl tracking-wide ">or download the app.</h3><br/>
                        <div className="flex flex-row">
                                <img src={appStore} />
                                <img src={playStore} className="mx-8"/>
                        </div>
                    </div>
                 </div>
          </div>
        </div>
    )
}

export default Hero
