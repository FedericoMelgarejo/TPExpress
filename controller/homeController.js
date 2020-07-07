const fs = require('fs');
const dataBase = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const home={
    index:function(req,res){
        res.write(` Bienvenido a nuestra pagina!

 Contamos sucursales en las siguientes zonas: `)

        dataBase.forEach(e => {
             res.write(`

             ${e.sucursal}
             `)
        })
        res.end()
    }

}

module.exports=home