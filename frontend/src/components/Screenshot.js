import { extend } from "jquery";
import React, { Component} from "react";
import '../App.css';

class Screenshot extends Component {
    render() {
        return (
            <div className="screen-shot" id="screenshots">
                <div className="d-flex justify-content-center screen-title">
                    <p>Screenshots</p>
                </div>
                <div className="d-flex justify-content-center screen-image">
                    <img src='images/worms.png' />
                </div>

            </div>
        );
    }
}

export default Screenshot;