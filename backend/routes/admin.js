const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-worm', adminController.getAddWorm);

router.get('/edit-worm/:animeId', adminController.getEditWorm);

router.post('/add-worm', adminController.postWorm);

router.post('/edit-worm', adminController.postEditWorm);

router.get('/:wormId', adminController.getWorm);

router.post('/delete', adminController.postWorm);

module.exports = router;
