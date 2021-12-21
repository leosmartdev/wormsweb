import React, { Component } from 'react';
import App from '../App';
import '../App.css';

class Tournament extends Component {
    render() {
        return (
            <div className='tournament'>
                <div className='d-flex justify-content-center tournament-title'>
                    <p>Torneo</p>
                </div>
                <div className='d-flex justify-content-center touranment-description'>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
                    elit, sed diam nonummy nibh euismod tincidunt ut 
                    laoreet dolore magna aliquam erat volutpat. Ut wisi 
                    enim ad minim veniam, quis nostrud exerci tation 
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea 
                    commodo consequat. Duis autem vel eum iriure dolor</p> 
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <button className='btn btn-lg btn-warning btn-rounded'>Participar</button>
                </div>
            </div>
            
        );
    }
}

export default Tournament;
