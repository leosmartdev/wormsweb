import React, { Component } from 'react';
import  '../App.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer' id="footer">
                <div className='d-flex justify-content-center footer-col-1'>
                    <img className='img-1' src='images/Amazon-Web-Services-AWS-Logo.jpg' />
                    <img className='img-1' src='images/Phaser_Logo.png' />
                    <img className='img-1' src='images/bsc.jpg' />
                    <img className='img-1' src='images/pancake.jpg' />
                </div>
                <div className='d-flex justify-content-center'>
                    <a href='localhost:3000' className='img-2'>
                        <img  src='images/Logo-Web.png' />
                    </a>
                </div>
                <div className='d-flex justify-content-center footer-col-3'>
                    <img className='img-3' src='images/red-1.svg' />
                    <img className='img-3' src='images/twitter.svg' />
                    <img className='img-3' src='images/telegram.svg' />
                </div>
                <div>
                    <hr />
                </div>
                <div className='d-flex justify-content-center footer-memo'>
                    <p>Condiciones de uso / Política de privacidad</p>
                </div>
            </div>
        );
    }
}

export default Footer;