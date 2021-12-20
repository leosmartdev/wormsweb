import React, { Fragment, useEffect, useState } from 'react';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import './App.css';

const App = () => {
	useEffect(() => {
		const getAPI = async () => {
			const response = await fetch('http://localhost:5000/');
			const data = await response.json();

			try {
				console.log(data);
				setLoading(false);
				setWorm(data);
			} catch (error) {
				console.log(error);
			}
		};
		getAPI();
	}, []);

	const [worm, setWorm] = useState([]);
	const [loading, setLoading] = useState(true);

	return (
		<Fragment>
			<header>
				<div className='d-flex justify-content-end'>
					<button className='btn btn-warning top-btn'><a href='/login'>INICIAR SESIÓN </a></button>
					<button className='btn btn-warning top-btn'><a href='/register' className=''>REGISTRARSE</a></button>
				</div>
				<div className="d-flex justify-content-center p-3 menu"> 
					<a href="/start" className='p-2 ml-3'>Inicio</a>
					<a href="/information" className='p-2 ml-3'>Información</a>
					<a href="/screenshots" className='p-2 ml-3'>Screenshots</a>
					<a href="/download" className='p-2 ml-3'>Descargas</a>
					<a href="/about" className='p-2 ml-3'>Sobre nosotros</a>
					<a href="/documentation" className='p-2 ml-3'>Documentación</a>
					<button className='btn btn-lg btn-warning'><a href='/playgame' className=''>JUGAR AHORA</a></button>
				</div>
			</header>

			<div className="container">
				{loading ? (
					<div>
					</div>
				) : (
					<div>
						{worm.map((data) => (
							<div key={data._id}>
								<main>
									<ul className="worm">
										<li>
											<img src={data.image} alt={data.name} className="worm-img" />
										</li>
										<li>
											<h1>{data.name}</h1>
										</li>

										<li>
											<a href={data._id}>View Worm &#x21DB;</a>
										</li>
									</ul>
								</main>
							</div>
						))}
					</div>
				)}
			</div>
			{

			}
		</Fragment>
	);
};

export default App;
