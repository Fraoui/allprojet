//On récupère le module "babel-register"
require('babel-register')({
    presets: ['es2015']
});
//On récupère server.js
require('./server');