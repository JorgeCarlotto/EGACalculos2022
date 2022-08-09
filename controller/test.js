//Pasa a horas a decimales 
// function timeToDecimal(t) {
//     var arr = t.split(':');
//     var dec = parseInt((arr[1]/6)*10, 10);

//     return parseFloat(parseInt(arr[0], 10) + '.' + (dec<10?'0':'') + dec);
// } 

// console.log(timeToDecimal('01:30'))


// Moment
// var b = moment('2022-08-09T10:29:00');//now
// var a = moment('2022-08-10T10:45:00');

// console.log(a.diff(b, 'minutes')) 
// console.log(a.diff(b, 'hours')) 
// console.log(a.diff(b, 'days')) 
// console.log(a.diff(b, 'weeks')) 
// console.log(((a.diff(b, 'minutes'))/60).toFixed(1)) 

let distanciaSazm = geolib.getPreciseDistance(  //da en mtrs
{ latitude: -37.9297222, longitude: -57.5763888 }, //MDP
{ latitude: -40.0806394, longitude: -58.1181208 }
);

let distanciaSazb = geolib.getPreciseDistance(  //da en mtrs
{ latitude: -38.72, longitude: -62.1583333 }, //Bahia
{ latitude: -40.0806394, longitude: -58.1181208 }
);

let distanciaSavv = geolib.getPreciseDistance(  //da en mtrs
{ latitude: -40.8672222, longitude: -63.0008333 }, //Viedma
{ latitude: -40.0806394, longitude: -58.1181208 }
);

let distanciaEntrePuntosFinalUno = (distanciaSazm/1852).toFixed(1)
let distanciaEntrePuntosFinalDos = (distanciaSazb/1852).toFixed(1)
let distanciaEntrePuntosFinalTres = (distanciaSavv/1852).toFixed(1)

console.log(distanciaEntrePuntosFinalUno)
console.log(distanciaEntrePuntosFinalDos)
console.log(distanciaEntrePuntosFinalTres)