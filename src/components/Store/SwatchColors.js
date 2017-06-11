import React, { Component } from 'react';
import Product from '../Product';

import '../../styles/store/SwatchColors.css';

class SwatchColors extends Component {
    constructor(props) {
        super(props);

    //     this.state = {
    //         initialState: 'https://www.hydroflask.com/media/catalog/product/cache/1/image/480x/0dc2d03fe217f8c83829496872af24a0/h/y/hydro-flask-stainless-steel-vacuum-insulated-water-bottle-12-oz-standard-mouth-flex-cap-cobalt.jpg'
    //     }
    //     setState(updater, handleClick());
    // }

    // handleClick() {
    //     setState('')
    // }
    }


    render() {
       
        return (
            <section>
                
            {/*<Product />*/}

            <div className="swatch-wrapper">
                <div className="swatch-container">
                    <li className={"cobalt-swatch swatch-displayer" + (this.props.handleClick ? 'show' : 'hidden')}></li>
                    <li className="graphite-swatch"></li>
                    <li className="kiwi-swatch"></li>
                    <li className="lava-swatch"></li>
                    <li className="lemon-swatch"></li>
                    <li className="mango-swatch"></li>
                    <li className="mint-swatch"></li>
                    <li className="pacific-swatch"></li>
                    <li className="plum-swatch"></li>
                    <li className="raspberry-swatch"></li>
                    <li className="sage-swatch"></li>
                    <li className="forest-swatch"></li>
                    <li className="citron-swatch"></li>
                    <li className="black-swatch"></li>
                    <li className="white-swatch"></li>
                    <li className="tangelo-swatch"></li>
                    <li className="stainless-swatch"></li>
                    
                </div>
            </div>
            </section>
        );
    }
}

/*React.createClass({
    getInitialState: function() {
    nextImg: false,
},
    handleClick: function() {
        this.setState({ nextImg: !this.state.nextImg })
    },
    render: function() {
        var imgUrl = this.state.nextImg ? this.state.nextImgSrc : this.state.color.imgSrc;
        var divStyle = {
            backgroundImage: 'url(' + imgUrl + ')'
        }

        return (
            <li>
                <div ref="image-pane" style={divStyle} onClick={this.handleClick}></div>
            </li>
        )
    }
});*/


export default SwatchColors;