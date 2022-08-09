const geolib = require('geolib');
const moment =require('moment');


let mainController = {

index: function(req,res){
    res.render("main")
},

cargarDatos: function(req,res){
     
    console.log(req.body)

    let latGrados = req.body.latGrados;
    let latMinutos = req.body.latMinutos;
    let latSegundos = req.body.latSegundos;

    let longGrados = req.body.longGrados;
    let longMinutos = req.body.longMinutos;
    let longSegundos = req.body.longSegundos;
    

    let rumbo = req.body.rumbo;
   
let latitudDecimal = geolib.toDecimal(`${latGrados}° ${latMinutos}' ${latSegundos}" S`); 

let longitudDecimal = geolib.toDecimal(`${longGrados}° ${longMinutos}' ${longSegundos}" W`); 
   
let firstTime = moment(req.body.firstTime);//now
let secondTime  = moment(req.body.secondTime);
let horaDecimales = ((secondTime.diff(firstTime, 'minutes'))/60).toFixed(1)
let distanciaEnMetros = ((req.body.velocidad) * horaDecimales) * 1852 ;

let puntoDesplazado = geolib.computeDestinationPoint(
    [longitudDecimal, latitudDecimal],
    distanciaEnMetros,
    rumbo
);
// console.log(latitudDecimal)
// console.log(longitudDecimal)
 
 console.log(geolib.decimalToSexagesimal(puntoDesplazado.latitude))
 console.log(geolib.decimalToSexagesimal(puntoDesplazado.longitude))

           


},
   


}

module.exports = mainController;