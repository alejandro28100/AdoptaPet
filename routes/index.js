var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send('Bienvenido a la api de adoptapet');
});

router.use('/usuarios', require('./usuarios'));

// router.use('/mascotas', require('./mascotas'));

module.exports = router;
