var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PessoaSchema = new Schema({
	nomePessoa: {type: String, required: true, trim: true},
	logradouro: {type: String, required: true, trim: true},
	endereco: {type: String, required: true, trim: true},
	contato: {type: String, required: true, trim: true}
});

module.exports = mongoose.model('Pessoa', PessoaSchema);