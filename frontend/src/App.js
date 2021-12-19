import React, { Fragment, useEffect, useState } from 'react';
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
				
			</header>

			<div className="container">
				{loading ? (
					<div>
						<p>No data to load</p>
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
			{/* <div>
				<h1>Add New Worm</h1>
				<form method="POST" action="http://localhost:8080/add-worm">
					<div>
						<label>Name</label>
						<input type="text" name="name" required />
					</div>
					<div>
						<label>Image</label>
						<input type="text" name="image" required />
					</div>
					<div>
						<label>Description</label>
						<input type="text" name="description" required />
					</div>

					<div>
						<button type="submit">Add Worm</button>
					</div>
				</form>
			</div> */}
		</Fragment>
	);
};

export default App;
