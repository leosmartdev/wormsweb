import { extend } from "jquery";
import React, { Component} from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

class Screenshot extends Component {
    render() {
        return (
            <div className="screen-shot" id="screenshots">
                <div className="d-flex justify-content-center screen-title">
                    <p>Screenshots</p>
                </div>
                <div className="d-flex justify-content-center screen-image">
                <Carousel>
                    <Carousel.Item interval={1500}>
                    <img
                        className=""
            src="images/worms.png"
                        alt="Image One"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                    <img
                        className=""
            src="images/touranment-1.png"
                        alt="Image Two"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                    <img
                        className=""
            src="images/touranment-2.png"
                        alt="Image Two"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                    <img
                        className=""
            src="images/touranment-3.png"
                        alt="Image Two"
                    />
                    </Carousel.Item>
                </Carousel>
                </div>

            </div>
        );
    }
}

export default Screenshot;