import React, { Component } from 'react';
import '../App.css';

class Download extends Component {
    render() {
        return (
            <div className='download row'>
                <div className='col-md-4'>
                    <div className='down-des'>
                        <p>Come crece y corre</p>
                        <button className='btn btn-lg btn-rounded btn-warning custom-btn mt-3'>Descargar</button>
                    </div>
                </div>
                <div className='col-md-8'>
                    <video className='video-frame'></video>

                </div>
            </div>
        );
    }
}

export default Download;