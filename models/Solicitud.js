// Solicitud.js
const mongoose = require('mongoose');

const SolicitudSchema = new mongoose.Schema({
	idMascota: String,
	fechaDeCreacion: Date,
	idUsuarioAnunciante: String,
	idUsuarioSolicitante: String,
	estado: String
});

mongoose.model('Solicitud', SolicitudSchema);

// /** Clase que representa una solicitud de adopción */
// class Solicitud {
// 	constructor(id, idMascota, fechaDeCreacion, idUsuarioAnunciante, idUsuarioSolicitante, estado) {
// 		this.id = id;
// 		this.idMascota = idMascota;
// 		this.fechaDeCreacion = fechaDeCreacion;
// 		this.idUsuarioAnunciante = idUsuarioAnunciante;
// 		this.idUsuarioSolicitante = idUsuarioSolicitante;
// 		this.estado = estado;
// 	}
// }

// module.exports = Solicitud;
