import React, { Component } from 'react';
import  '../App.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='d-flex justify-content-center footer-col-1'>
                    <img className='img-1' src='images/Amazon-Web-Services-AWS-Logo.png' />
                    <img className='img-1' src='images/Phaser_Logo.png' />
                    <img className='img-1' src='images/bsc.png' />
                    <img className='img-1' src='images/wNFwWoW.png' />
                </div>
                <div className='d-flex justify-content-center footer-col-1'>
                    <img className='img-3-1' src='images/red-1.svg' />
                    <img className='img-3-1' src='images/twitter.svg' />
                    <img className='img-3-1' src='images/telegram.svg' />
                </div>
            </div>
        );
    }
}

export default Footer;