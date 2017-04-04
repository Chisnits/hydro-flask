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
     autoplay: true,
     autoplaySpeed: 3000
   }


    return (
    <div className='carousel-home'>
      	<Slider {...settings}>
          <div className="tumblr">
            <div className="tumblrText">
                <span>introducing tumblers</span> <br/>
                <span> Your new go-to.</span> <br/>
                <span> shop tumblers</span> <span></span>
            </div>
          </div>
          <div className="camping"></div>
          <div className="sunset"></div>
        </Slider>
    </div>
        )
    }
}

export default HomeCarousel