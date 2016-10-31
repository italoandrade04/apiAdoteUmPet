var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var AnimalSchema = new Schema({
	nomeAnimal: {type: String, required: true, trim: true},
	raca: {type: String, required: true, trim: true},
	idade: {type: Number, required: true, min: 0, max: 25},
	descricao: {type: String, required: true, trim: true}
});

module.exports = mongoose.model('Animal', AnimalSchema);