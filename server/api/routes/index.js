const express = require('express');

const pictureRoutes = require('./picture.route');

const router = express.Router();

router.get('/status', (req, res) => res.json({ status: 'OK' }));
router.use('/docs', express.static('docs'));
router.use('/pictures', pictureRoutes);

module.exports = router;
