const Mascota = require('../models/Mascota');

var mascotas = [
	new Mascota('1', 'Puppy', '', [], 'Perrito muy amigable', 'Alejandro F.', 'Puebla, Puebla'),
	new Mascota('2', 'Coco', '', [], 'Perrito juguetón', 'Carlos C.', 'Puebla, Puebla'),
	new Mascota('3', 'Rocky', '', [], 'Perrito muy cariñoso', 'Juan P.', 'Puebla, Puebla')
];

function crearMascota(req, res) {
	var { id, nombre, categoria, fotos, descripcion, anunciante, ubicacion } = req.body;
	var mascota = new Mascota(id, nombre, categoria, fotos, descripcion, anunciante, ubicacion);
	//añadir mascota a la base de datos

	//devolver mascota creada
	res.status(202).send(mascota);
}

function obtenerMascotas(req, res) {
	res.status(202).send(mascotas);
}

function modificarMascota(req, res) {
	var { id } = req.params;
	if (!!!id) {
		res.status(404).send('Mascota no encontrada');
		return;
	}
	var mascota = mascotas.find((mascota) => mascota.id === id);
	var mascotaModificada = { mascota, ...req.body };
	res.status(202).send(mascotaModificada);
}

function eliminarMascota(req, res) {
	var { id } = req.params;
	if (!!!id) {
		res.status(404).send('Mascota no encontrada');
		return;
	}

	res.status(200).send(`Mascota con id ${id} fue eliminada correctamente`);
}

module.exports = {
	crearMascota,
	obtenerMascotas,
	modificarMascota,
	eliminarMascota
};
