// main course page goes here
import React from 'react';
import heroImage from '../../../assets/static/react-web-designs/Hero_center_image.png';
import appStore from '../../../assets/static/react-web-designs/appstore_logo.svg';
import playStore from '../../../assets/static/react-web-designs/playstore_logo.svg';
import logo from '../../../assets/images/logo.png';
import discord from '../../../assets/static/react-web-designs/discord_logo.svg';
import linkedin from '../../../assets/static/react-web-designs/linked-in_logo.svg';
import Twitter from '../../../assets/static/react-web-designs/twitter_logo.svg';
import YouTube from '../../../assets/static/react-web-designs/yt_logo.svg';
import left from '../../../assets/static/react-web-designs/arrow_left.svg';
import right from '../../../assets/static/react-web-designs/arrow_right.svg';
import menu from '../../../assets/images/Menu.svg';
import gotocourse from '../../../assets/static/react-web-designs/GOTO.svg';

const Hero = () => {
  return (
    // Main div
    <div>
      <div className="font-redHatDisplay flex flex-row">
        <div className="h-screen w-1/3 bg-fifth">
          {/* Left div */}

          <div className="flex justify-start mx-20 my-10">
            <img src={logo} />
            <img
              className="absolute"
              style={{ marginLeft: '7vw', marginTop: '245px' }}
              src={gotocourse}
            />
          </div>

          {/* Right div */}

          <div className="container relative left-1/2 m-0 bottom-10 box-border h-2/3 w-auto">
            {/* absolute div content*/}
            <img src={heroImage} className="h-full w-full" />
          </div>

          <div className="flex flex-row">
            <div className="flex flex-row justify-start mx-5 -my-4" style={{"width":"fit-content", "marginLeft":"18vw", "marginTop":"-6vw"}}>
                    <img src={Twitter} alt="logo" style={{"width":"fit-content", "marginLeft":"1vw", "marginTop":"3vw"}} />
                 
                    <img src={linkedin} alt="logo" style={{"width":"fit-content", "marginLeft":"1vw", "marginTop":"3vw"}}  />
                
                    <img src={YouTube} alt="logo" style={{"width":"fit-content", "marginLeft":"1vw", "marginTop":"3vw"}} />
                 
                    <img src={discord} alt="logo" style={{"width":"fit-content", "marginLeft":"1vw", "marginTop":"3vw"}} />
                  
            </div>

            {/* <div className="absolute flex flex-row justify-end flex-wrap" style={{ "marginLeft":"1vw"}} > */}
                     <img src={left} className="absolute flex flex-row justify-end flex-wrap" style={{ "marginLeft":"39vw", "margin-top": "-2.5vw"}} />
                     <img src={right} className="absolute flex flex-row justify-end flex-wrap" style={{ "marginLeft":"42vw", "margin-top": "-2.8vw"}} />
            {/* </div> */}

          </div>
        </div>

        {/* Right Div content */}

        <div className="h-screen w-2/3 bg-fourth">
          <div className="flex justify-end mx-8 my-16">
            <img src={menu} />
          </div>

          <div
            className=""
            style={{
              height: 'fit-content',
              width: 'auto',
              marginLeft: '20vw',
              marginTop: '20.5vh'
            }}
          >
            <h1 className="text-4xl my-2 font-bold tracking-widest">
              Quality Education.
            </h1>
            <h1 className="text-4xl my-2 font-bold tracking-widest">
              Free for all
            </h1>
            <br />
            <h3 className="font-semibold">We provide FREE hands-on training,</h3>
            <h3 className="font-semibold">
              mentorship and have an inclusive community.
            </h3>
            <button
              className="bg-secondary w-20 my-3 rounded-lg p-1 font-bold "
              style={{
                boxShadow:
                  '0 4px 4px 0 rgba(128, 183, 200, 0.4), 0 6px 10px 0 rgba(128, 183, 200, 0.4)'
              }}
            >
              Join us
            </button>
            <br />
            <h3 className="font-black shadow-2xl tracking-wide ">
              or download the app:
            </h3>
            <br />
            <div className="flex flex-row">
              <img src={appStore} />
              <img src={playStore} className="mx-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
