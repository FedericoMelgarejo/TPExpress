const fs = require('fs');
const { resolveSoa } = require('dns');
const dataBase = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))




const autos={
    auto:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Contamos los siguientes autos:")
        let car=[]
        dataBase.forEach(e => {
            e.autos.forEach(e=>{
                car.push(e)
            })
        })
        car.forEach(e=>{
            res.write("\n\n----------------------------------")
            res.write("\n\nMarca: "+e.marca+"\n")
            res.write("Modelo: "+e.modelo+"\n")
            res.write("Año: "+e.anio+"\n")
            res.write("Color: "+e.color+"\n")
            res.write("----------------------------------")
        })
        res.end()
    },
    marca:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        let idMarca=req.params.marca
        let luz=false
        dataBase.forEach(data => {
            
            data.autos.forEach(autos=>{
                if(autos.marca==idMarca){
                    luz=true
                } 
            })
        })
        if(luz==true){
            res.write("Listando autos de la marca "+idMarca)
        }
        luz=false
        dataBase.forEach(data => {
            
            data.autos.forEach(autos=>{
                if(autos.marca==idMarca){
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
            res.write("No contamos con la marca "+idMarca)
        }
        res.end()
    },
    ///////////////////////////////////////////////////////////////////////////
    dato:(req,res)=>{res.set({'content-type':'text/plain;charset=utf-8'})
    let idMarca=req.params.marca
    let idDato=req.params.dato 
    let luz=false
    let car=[]
    dataBase.forEach(e => {
        e.autos.forEach(e=>{
            car.push(e)
        })
    })
    car.forEach(e => {
        if(e.marca==idMarca && e.color==idDato){
            res.write("\n\nModelo: "+e.modelo)
            res.write("\n\nColor: "+e.color)
            res.write("\n\n------------------------------")
            luz=true
        }
        if(e.marca==idMarca && e.anio==idDato){
            res.write("\n\nModelo: "+e.modelo)
            res.write("\n\nColor: "+e.anio)
            res.write("\n\n------------------------------")
            luz=true
        }
        
    })
    if(luz==false){
        res.write("No se encontro el dato solicitado")
    }
    res.end()
    }

}

module.exports=autos

/*dato:(req,res)=>{res.set({'content-type':'text/plain;charset=utf-8'})
    let idMarca=req.params.marca
    let idDato=req.params.dato 
    let luz=false
    let car=[]
    dataBase.forEach(e => {
        e.autos.forEach(e=>{
            car.push(e)
        })
    })

    car.forEach(e => {
        if(e.marca==idMarca && e.color==idDato){
            luz=true
        }
    })

    if(luz==true){
        res.write("Listando autos de la marca "+idMarca+" y el color "+idDato)
        res.write("\n\n---------------------------------------------------------------")
    }
    car.forEach(e => {
        if(e.marca==idMarca && e.color==idDato){
            res.write("\n\nModelo: "+e.modelo)
            res.write("\n\nColor: "+e.color)
            res.write("\n\n------------------------------")
        }
    })
    if(luz==false){
        res.write("No contamos con modelos de ese color")
    }
    
    

    res.end()
    }*/