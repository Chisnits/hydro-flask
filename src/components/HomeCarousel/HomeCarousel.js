import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../styles/HomeCarousel.css';

class HomeCarousel extends Component {
    render() {
     var settings = {
     dots: true,
     infinite: true,
     slidesToScroll: 1,
     arrows: false,
    //  autoplay: true,
    //  autoplaySpeed: 3000
   }


    return (
    <div className="home-carousel">
      	<Slider {...settings}>
            <div className="tumblr">
                <div className="tumblrText">
                    <div className="tumblr-text-slide-container">
                        <span className="slide-one-line-one">introducing tumblers</span> 
        
                        <span className="slide-one-line-two"> Your new go-to.</span>
                    
                        <span className="slide-one-line-three"> shop tumblers</span>
                    </div>
                </div>
          </div>
            <div className="camping">
                <div className="camping-text-container">
                    <div className="camping-text">
                        <div className="camping-text-slide-container">
                            <span className="slide-two-line-one">
                                Hydro Flask Presents
                            </span>
                            <span className="slide-two-line-two">
                                constant <br/>
                                motion
                            </span>
                            <span className="slide-two-line-three">
                                Ride along with Quin Schrock as <br/>
                                he explores the wilderness of <br/>
                                Northern California, camera in hand. 
                            </span>
                            <span className="slide-two-line-four">
                                watch the film
                            </span>
                        </div>
                    </div>
                </div>        
            </div>
          <div className="sunset"></div>
        </Slider>
    </div>
        )
    }
}

export default HomeCarousel