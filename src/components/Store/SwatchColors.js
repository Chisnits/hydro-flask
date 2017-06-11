import React, { Component } from 'react';

import '../../styles/store/SwatchColors.css';

class SwatchColors extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleClick() {
        
    }

    render() {
       
        return (
            <div className="swatch-wrapper">
                <div className="swatch-container">
                    <li className="cobalt-swatch"></li>
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