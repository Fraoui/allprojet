//importation des packages
import express from 'express';
//importation du router dans users
import router from './users/route';

//création de l'application express
let app = express();

app.use(function(req, res, next) {
 res.header(`Access-Control-Allow-Origin`, `*`); // tout le monde y a access
 res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`); // crud
 res.header(`Access-Control-Allow-Headers`, `Content-Type, token`);
 next(); 
});



app.use('/users',router);

app.listen('8000',() => {
	console.log('Connecté au port 8000');
});
