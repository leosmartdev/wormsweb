const Worm = require('../models/Worm');

exports.getIndex = async (req, res) => {
	const worm = await Worm.find((data) => data);

	try {
		console.log(worm);
		// Data rendered as an object and passed down into index.ejs
		res.status(200).render('index', { worm: worm });

		// Data returned as json so a fetch/axios requst can get it
		// res.json(worm);
	} catch (error) {
		console.log(error);
	}
};

exports.getWorm = async (req, res) => {
	const animeId = req.params.animeId;

	const worm = await Worm.findById(animeId, (worm) => worm);

	try {
		console.log(worm);
		res.status(200).render('worm', { worm: worm });
	} catch (error) {
		console.log(error);
	}
};

exports.getAddWorm = (req, res) => {
	res.status(200).render('edit-worm', { editing: false });
};

exports.getEditWorm = async (req, res) => {
	const animeId = req.params.animeId;

	const editMode = req.query.edit;

	if (!editMode) {
		return res.redirect('/');
	}

	const worm = await Worm.findById(animeId);

	try {
		if (!animeId) {
			return res.redirect('/');
		}
		console.log(worm);
		res.status(200).render('edit-worm', { worm: worm, editing: editMode });
	} catch (error) {
		console.log(error);
	}
};

exports.postWorm = (req, res) => {
	const { name, image, description } = req.body;

	const worm = new Worm({ name: name, image: image, description: description });
	worm.save();
	console.log('Worm Added to the database');

	// Updated the home route to the React App index page
	// res.status(201).redirect('http://localhost:3000/');

	// Home route for ejs index page
	res.status(201).redirect('/');
};

exports.postEditWorm = (req, res) => {
	const animeId = req.body.animeId;
	const { name, image, description } = req.body;

	Worm.findById(animeId)
		.then((worm) => {
			worm.name = name;
			worm.image = image;
			worm.description = description;

			return worm.save();
		})
		.then(() => {
			console.log('Item Updated');
			res.status(201).redirect(`/${animeId}`);
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.postDelete = async (req, res) => {
	const animeId = req.body.animeId;

	const worm = await Worm.findByIdAndRemove(animeId, (data) => data);

	try {
		console.log(worm);
		console.log('Item Deleted');
		res.redirect('/');
	} catch (error) {
		console.log(error);
	}
};
