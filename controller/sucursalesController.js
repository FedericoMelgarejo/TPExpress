const fs=require('fs');
const autos = require('./autosController');
const dataBase=JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const sucursales={
    sucursales:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Estas son nuestras sucursales:\n")
        dataBase.forEach(e => {
            res.write(`
            ************************************************************
            Sucursal:${e.sucursal}:
            Direccion:${e.direccion}
            Telefono: ${e.telefono}
            ************************************************************
            `)
        });
        res.end()
    },
    sucursal:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id = req.params.sucursal;
        dataBase.forEach((sucursal)=>{
            if(sucursal.sucursal == id){
                res.write("Sucursal: "+sucursal.sucursal+"\n")
                res.write( "Direccion: "+sucursal.direccion+"\n")
                res.write( "Telefono:"+sucursal.telefono+"\n")
                res.write("\n\nCantidad de autos disponible:"+sucursal.autos.length+"\n\n")
                sucursal.autos.forEach(m=>{
                    res.write("\n\nMarca: "+m.marca+"\n")
                    res.write("Modelo: "+m.modelo+"\n")
                    res.write("Año: "+m.anio+"\n")
                })
                res.end()
            }
        })
        res.end("No tenemos sucursales en "+id)
    }
}
module.exports=sucursales