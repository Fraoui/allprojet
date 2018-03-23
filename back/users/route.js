//importation des packages
import express from 'express';
import * as bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
//importation de la base de données Mongo
import * as mongodb from 'mongodb';


let mongo = mongodb.MongoClient; 
let router = express.Router();

var url = 'mongodb://localhost:27017';
var _client = "";




//dire que l'application va utiliser body parser(ce qui permet de lire les données du front envoyé au back) 
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

mongo.connect(url, function(err, client) { // connexion au serveur de url de la bdd
	console.log("Connected successfully to server");
	_client = client;
});

//fonction qui permet de créer un utilisateur
router.post('/signup', (req,res) =>{
	let user = req.body;
	if(user.username && user.password){
		var db = _client.db('projetVue');
		db.collection('User').find({username : user.username}).toArray(function(err, docs){
			if(docs[0]){
				res.send({success:"no",message : "L'utilisateur "+user.username+" existe déja"});
			}
			else{
				db.collection('User').save(user); 
				res.status(200).send({success:"yes",message : 'Utilisateur ajouté'});
			}
		})	
	}
	else{
		res.status(401).send({success:"no",message : "information incorrecte"});
	}	
})

//fonction qui permet de connecter un utilisateur et qui créé et envoie un token
router.post('/login', (req,res) => {
	let user = req.body;
	if(user.username && user.password){
		var db = _client.db('projetVue');
		db.collection('User').find({username : user.username, password : user.password}).toArray(function(err, docs){
			if(docs[0]){
				// let token = jwt.sign({ user: user.username }, 'shhhhh');
				let token = jwt.sign({ user: user.username, iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');
				res.status(200).send({success:"yes",message : "login ok", token : token});
			}
			else{
				res.send({success:"no",message : "login incorrecte"});
			}
		})
		
		
	}
	else{
		res.send({success:"no",message : "information incorrecte"});
	}
})





//fonction qui renvoie la liste des utilisateurs
router.get('', (req,res) =>{
	let token = req.headers.token;
	let decoded = jwt.verify(token, 'shhhhh');
	console.log(decoded.iat);
	var db = _client.db('projetVue');
	db.collection('User').find({username : decoded.user}).toArray(function(err, docs){
		if(docs[0]){
			console.log(decode.iat, Date.now);
			res.status(200).send({success:"yes",message : "login ok"});
			
			db.collection('User').find({}).toArray(function(err, docs){
				res.status(200).send(docs);
			});
		}
		else{
			res.status(401).send("pas autorisé");
		}
	});
	
	
})


router.get('/message', (req,res) =>{
	let token = req.headers.token;
	var decoded = jwt.verify(token, 'shhhhh');
	console.log(decoded.iat+" date "+Math.floor(Date.now() / 1000) +( 60 * 60));
	var db = _client.db('projetVue');
	db.collection('User').find({username : decoded.user}).toArray(function(err, docs){
		if(docs[0]){
			db.collection('message').find({$or : [{emetteur :decoded.user}, {recepteur: decoded.user}]}).toArray(function(err, docs){
				res.status(200).send(docs);
			});
		}
		else{
			res.status(401).send("pas autorisé");
		}
	});
})

export default router;