const geolib = require('geolib');
const moment =require('moment');


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



// var oldDate = new Date("2022-07-09T08:48:34.000Z");
// var today = new Date();

// console.log(DifferenceInDays(oldDate, today));

// function DifferenceInDays(firstDate, secondDate) {
//     return Math.round((secondDate-firstDate)/(1000*60*60*24));
// } 


var b = moment('2022-08-09T10:29:00');//now
var a = moment('2022-08-10T10:45:00');

console.log(a.diff(b, 'minutes')) 
console.log(a.diff(b, 'hours')) 
console.log(a.diff(b, 'days')) 
console.log(a.diff(b, 'weeks')) 
console.log(((a.diff(b, 'minutes'))/60).toFixed(1)) 



},
   


}

module.exports = mainController;