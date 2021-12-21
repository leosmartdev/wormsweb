import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header row'>
                <div className='col-md-1'>
                    <img src="images/Logo-Web.png" alt="logo" />
                </div>
                <div className='top-menu col-md-11'>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-warning top-btn'>INICIAR SESIÓN</button>
                        <button className='btn btn-warning top-btn'>REGISTRARSE</button>
                    </div>
                    <div className="d-flex justify-content-center p-3 menu"> 
                        <a href="http://localhost:5000/start" className='p-2 ml-3'>Inicio</a>
                        <a href="http://localhost:5000/information" className='p-2 ml-3'>Información</a>
                        <a href="http://localhost:5000/screenshots" className='p-2 ml-3'>Screenshots</a>
                        <a href="http://localhost:5000/download" className='p-2 ml-3'>Descargas</a>
                        <a href="http://localhost:5000/about" className='p-2 ml-3'>Sobre nosotros</a>
                        <a href="http://localhost:5000/documentation" className='p-2 ml-3'>Documentación</a>
                        <button className='btn btn-lg btn-warning'><a href='http://localhost:5000/playgame' className=''>JUGAR AHORA</a></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;