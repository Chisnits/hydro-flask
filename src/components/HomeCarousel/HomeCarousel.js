import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../styles/HomeCarousel.css';

class HomeCarousel extends Component {
    render() {
     var settings = {
     dots: false,
     infinite: true,
     slidesToScroll: 1,
     arrows: false,
     autoplay: true,
     autoplaySpeed: 3000
   }


    return (
    <main className="home-carousel">
      	<Slider {...settings}>
            <section className="tumblr">
                <div className="tumblrText">
                    <div className="tumblr-text-slide-container">
                        <div className="slide-one-line-one">introducing tumblers</div> 
        
                        <div className="slide-one-line-two"> Your new go-to.</div>
                    
                        <div className="slide-one-line-three"> shop tumblers</div>
                    </div>
                </div>
          </section>
            <section className="camping">
                <div className="camping-text-container">
                    <div className="camping-text">
                        <div className="camping-text-slide-container">
                            <div className="slide-two-line-one">
                                Hydro Flask Presents
                            </div>
                            <div className="slide-two-line-two">
                                constant <br/>
                                motion
                            </div>
                            <div className="slide-two-line-three">
                                Ride along with Quin Schrock as <br/>
                                he explores the wilderness of <br/>
                                Northern California, camera in hand. 
                            </div>
                            <div className="slide-two-line-four">
                                watch the film
                            </div>
                        </div>
                    </div>
                </div>        
            </section>
          <section className="sunset">
              <div className="camping-text-container">
                    <div className="camping-text">
                        <div className="camping-text-slide-container">
                            <div className="slide-two-line-one">
                                Hydro Flask Presents
                            </div>
                            <div className="slide-two-line-two">
                                freezing <br/>
                                time
                            </div>
                            <div className="slide-two-line-three">
                                Experience the beauty of surfing <br/>
                                rugged coastlines as captured <br/>
                                through Mark Mclnnis's lens. 
                            </div>
                            <div className="slide-two-line-four">
                                watch the film
                            </div>
                        </div>
                    </div>
                </div>        
          </section>
            
        </Slider>
    </main>
        )
    }
}

export default HomeCarousel