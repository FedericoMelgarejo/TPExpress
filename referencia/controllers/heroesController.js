let fs = require('fs');
let dbHeroes = JSON.parse(fs.readFileSync('./data/heroes.json','utf-8'))

const heroes = {
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        dbHeroes.forEach((heroe)=>{
            
            res.write(heroe.nombre + '\n\n');
            res.write(heroe.profesion + '\n');
            res.write(heroe.pais + '\n');
            res.write(heroe.resenia + '\n\n')
        })
        res.end()
    },
    detalle:(req,res)=>{
        let idHeroe = req.params.id;
        dbHeroes.forEach((heroe)=>{
            if(heroe.id == idHeroe){
                res.send('Hola, mi nombre es '+ heroe.nombre + ' y soy ' + heroe.profesion)
            }
        })
        res.end("No se encuentra al heroe que buscabas")
    },
    bio:(req,res)=>{
        let idHeroe = req.params.id;
        let ok = req.params.ok;

        dbHeroes.forEach((heroe)=>{
            if(heroe.id == idHeroe){
                if(ok == 'ok'){
                    res.write(heroe.nombre + '\n\n');
                    res.write(heroe.resenia);
                    res.end()
                }else{
                    res.send(heroe.nombre + 'dice: Lamento que no quieras saber mas de mi')
                }
            }
        })
        res.end('No se encuentra al heroe que buscabas')
    }
}

module.exports = heroes;