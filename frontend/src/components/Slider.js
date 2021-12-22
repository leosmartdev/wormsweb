import React, { Component } from 'react';
import  '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

class Slider extends Component {
    render() {
        return (
            <div className='first-slogan mt-3' id='#start'>
                <Carousel>
                    <Carousel.Item interval={1500}>
                    <img
                        className=""
            src="images/First-Slide.png"
                        alt="Image One"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                    <img
                        className=""
            src="images/Second-Slide.png"
                        alt="Image Two"
                    />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Slider;