const geolib = require('geolib');

let mainController = {

index: function(req,res){
    res.render("main")
},

cargarDatos: function(req,res){
    // console.log(req.body)

    let latGrados = req.body.latGrados;
    let latMinutos = req.body.latMinutos;
    let latSegundos = req.body.latSegundos;

    let longGrados = req.body.longGrados;
    let longMinutos = req.body.longMinutos;
    let longSegundos = req.body.longSegundos;
   
let latitudDecimal = geolib.toDecimal(`${latGrados}° ${latMinutos}' ${latSegundos}" S`); 

let longitudDecimal = geolib.toDecimal(`${longGrados}° ${longMinutos}' ${longSegundos}" W`); 
    

console.log(latitudDecimal)
console.log(longitudDecimal)
    
},
   
}

module.exports = mainController;