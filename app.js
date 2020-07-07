const express=require('express')
const app=express()

const routeHome=require('./routes/home')
const routeAutos=require('./routes/autos')
const routeMarcas=require('./routes/marcas')
const routeSucursales=require('./routes/sucursales')

app.use('/',routeHome)
app.use('/marcas',routeMarcas)
app.use('/sucursales',routeSucursales)
app.use('/autos',routeAutos)

app.listen(3030,()=>console.log('servidor levantado puerto 3030'))