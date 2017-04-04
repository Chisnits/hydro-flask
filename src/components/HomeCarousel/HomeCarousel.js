import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../styles/HomeCarousel.css';

class HomeCarousel extends Component {
    render() {
     var settings = {
     infinite: true,
     slidesToScroll: 1,
     arrows: false,
     autoplay: true,
     autoplaySpeed: 3000

   }


    return (
    <div className='carousel-home'>
      	<Slider {...settings}>
          <div><img src='http://placekitten.com/g/650/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>
    </div>
        )
    }
}

export default HomeCarousel