//express

const express = require('express');
const app = express();

//rutas

const routeMain = require('./routes/main');
const routeHeroes = require('./routes/heroes');

//servidor

app.listen(3030,()=>console.log("El servidor esta funcionando en el puerto 3030"));

//uso los modulos de rutas

app.use('/',routeMain);
app.use('/heroes',routeHeroes);
