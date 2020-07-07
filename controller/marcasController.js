const fs = require('fs');
const autos = require('./autosController');
const { resolveSoa } = require('dns');
const dataBase = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const marcas={
    marcas:function(req,res){

        res.write("Contamos las siguientes marcas:\n")
        let marcas=[]
        dataBase.forEach(e => {
            e.autos.forEach(e=>{
                marcas.push(e.marca)
            })
        })
        marcas=marcas.filter((a, i)=>marcas.indexOf(a)===i)
        marcas.forEach(e=>{
            res.write(`
            ${e}
            `)
        })
        res.end()
    },  
    marca:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id=req.params.marca   
        let luz=false
        dataBase.forEach(data => {
            
            data.autos.forEach(autos=>{
                if(autos.marca==id){
                    luz=true
                } 
            })
        })
        if(luz==true){
            res.write("Listando autos de la marca "+id)
        }
        luz=false
        dataBase.forEach(data => {
            
            data.autos.forEach(autos=>{
                if(autos.marca==id){
                    res.write("\n\n------------------------------")
                    res.write("\n\nMarca: "+autos.marca+"\n")
                    res.write("Modelo: "+autos.modelo+"\n")
                    res.write("Año: "+autos.anio+"\n")
                    res.write("Color: "+autos.color+"\n")
                    res.write("------------------------------")
                    luz=true
                } 
            })
        })
        if(luz==false){
            res.write("No contamos con la marca "+id)
        }
        res.end()
    }
}
module.exports=marcas