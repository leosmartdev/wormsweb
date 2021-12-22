import React, { Component } from 'react';
import '../App.css';

class Download extends Component {
    render() {
        return (
            <div className='download row' id="download">
                <div className='col-md-4'>
                    <div className='down-des'>
                        <p>Come crece y corre</p>
                        <button className='btn btn-lg btn-rounded btn-warning custom-btn mt-3'>Descargar</button>
                    </div>
                </div>
                <div className='col-md-8'>
                    <video className='video-frame' controls>
                        <source src="images/game-video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        );
    }
}

export default Download;