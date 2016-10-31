var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	app = express(),
	Pessoa = require('./models/Pessoa'),
	Animal = require('./models/Animal');

//Conexão com mongoDB
mongoose.connect('mongodb://localhost/api', function(err){
	if(err){
		console.log('Erro ao conectar no mongodb'+err);
	}
});

app.use(bodyParser());

var port = process.env.PORT || 3000;

//Rotas
var router = express.Router();

router.get('/', function(req,res){
	res.json({message: 'API AdoteUmPet'});
});

//Rota Pessoas
router.route('/Pessoa')
	.get(function(req,res){
		Pessoa.find(function(err, dados){
			if(err){
				res.send(err);
			}
			res.json(dados);
		})
	})

	.post(function(req,res){
		var pessoas = new Pessoa();
		pessoas.nomePessoa = req.body.nomePessoa;
		pessoas.logradouro = req.body.logradouro;
		pessoas.endereco = req.body.endereco;
		pessoas.contato = req.body.contato;
		pessoas.save(function(err){
			if(err){
				res.send(err);
			}
			res.json({message: 'Pessoa cadastrada'})
		});
	});

router.route('/Pessoa/:id')
	.get(function(req,res){
		Pessoa.findById(req.params.id, function(err, dados){
			if(err){
				res.send(err);
			}
				res.json(dados);
		});
	})
	.put(function(req,res){
		Pessoa.findById(req.params.id, function(err, dados){
			if(err){
				req.send(err)
			}
				dados.nomePessoa = req.body.nomePessoa;
				dados.save(function(err){
					if(err){
						res.send(err)
					}
					res.json({message: 'Pessoa atualizada'})
				});
		});
	})
	.delete(function(req,res){
		Pessoa.remove({_id: req.params.id}, function(err, dados){
			if(err){
				res.send(err);
			}
				res.json({message: 'Pessoa excluida'})
		})
	});

//Rota animais
router.route('/Animal')
	.get(function(req,res){
		Animal.find(function(err, dados){
			if(err){
				res.send(err);
			}
			res.json(dados);
		})
	})

	.post(function(req,res){
		var animais = new Animal();
		animais.nomeAnimal = req.body.nomeAnimal;
		animais.raca = req.body.raca;
		animais.idade = req.body.idade;
		animais.descricao = req.body.descricao;
		animais.save(function(err){
			if(err){
				res.send(err);
			}
			res.json({message: 'Animal cadastrada'})
		});
	});

app.use('/api', router);

app.listen(port, function(){
	console.log('Serrvidor rodando na porta: '+port);
});
