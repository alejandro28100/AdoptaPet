var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*********************** Mongoose Configuration *******************************/
const mongoose = require('mongoose');

var isProduction = process.env.NODE_ENV === 'production';

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

mongoose.set('debug', true);

require('./models/Usuario');
require('./config/passport');
// Aquí se importarán los modelos Mascota y Solicitud cuando estén listos

/*********************** Mongoose Configuration *******************************/

app.use('/v1', require('./routes'));

app.use((req, res, next) => {
	var err = new Error('Not found');
	err.status = 404;
	next(err);
});

var port = process.env.PORT || 3000;
//Iniciando el servidor...
var server = app.listen(port, console.log(`Escuchando en el puerto ${port}.`));
