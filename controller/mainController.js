const geolib = require('geolib');

let mainController = {

index: function(req,res){
    res.render("main")
},

cargarDatos: function(req,res){
     
    //console.log(req.body)

    let latGrados = req.body.latGrados;
    let latMinutos = req.body.latMinutos;
    let latSegundos = req.body.latSegundos;

    let longGrados = req.body.longGrados;
    let longMinutos = req.body.longMinutos;
    let longSegundos = req.body.longSegundos;
    

    let rumbo = req.body.rumbo;
   
let latitudDecimal = geolib.toDecimal(`${latGrados}° ${latMinutos}' ${latSegundos}" S`); 

let longitudDecimal = geolib.toDecimal(`${longGrados}° ${longMinutos}' ${longSegundos}" W`); 
   

let puntoDesplazado = geolib.computeDestinationPoint(
    [longitudDecimal, latitudDecimal],
    674128,
    rumbo
);
//console.log(latitudDecimal)
//console.log(longitudDecimal)
 
//console.log(geolib.decimalToSexagesimal(puntoDesplazado.latitude))
//console.log(geolib.decimalToSexagesimal(puntoDesplazado.longitude))




//Pasa a horas a decimales 
function timeToDecimal(t) {
    var arr = t.split(':');
    var dec = parseInt((arr[1]/6)*10, 10);

    return parseFloat(parseInt(arr[0], 10) + '.' + (dec<10?'0':'') + dec);
} 

console.log(timeToDecimal('01:30'))








},
   


}

module.exports = mainController;