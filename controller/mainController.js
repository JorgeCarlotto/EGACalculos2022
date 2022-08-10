const geolib = require("geolib");
const moment = require("moment");



const sazm = {
    latitude: -37.9297222,
    longitude: -57.5763888,
  };

  const sazb = {
    latitude: -38.72,
    longitude: -62.1583333,
  };

  const savv = {
    latitude: -40.8672222,
    longitude: -63.0008333,
  };



let mainController = {
//   index: function (req, res) {
//     res.render("main");
//   },

  cargarDatos: function (req, res) {
   // console.log(req.body);

    let latGrados = req.body.latGrados;
    let latMinutos = req.body.latMinutos;
    let latSegundos = req.body.latSegundos;

    let longGrados = req.body.longGrados;
    let longMinutos = req.body.longMinutos;
    let longSegundos = req.body.longSegundos;

    let rumbo = req.body.rumbo;

    let latitudDecimal = geolib.toDecimal(
      `${latGrados}° ${latMinutos}' ${latSegundos}" S`
    );

    let longitudDecimal = geolib.toDecimal(
      `${longGrados}° ${longMinutos}' ${longSegundos}" W`
    );

    let firstTime = moment(req.body.firstTime); //now
    let secondTime = moment(req.body.secondTime);
    let horaDecimales = (secondTime.diff(firstTime, "minutes") / 60).toFixed(1);
    let distanciaEnMetros = req.body.velocidad * horaDecimales * 1852;

    let puntoDesplazado = geolib.computeDestinationPoint(
      [longitudDecimal, latitudDecimal],
      distanciaEnMetros,
      rumbo
    );
    // console.log(latitudDecimal)
    // console.log(longitudDecimal)

    let puntoDesplazadoFinal = {
      latitude: geolib.decimalToSexagesimal(puntoDesplazado.latitude),
      longitude: geolib.decimalToSexagesimal(puntoDesplazado.longitude),
    };
    //  console.log(geolib.decimalToSexagesimal(puntoDesplazado.latitude))
    //  console.log(geolib.decimalToSexagesimal(puntoDesplazado.longitude))



    let distanciaSazm = ((geolib.getPreciseDistance(sazm,{ latitude: latitudDecimal, longitude: longitudDecimal }))/1852).toFixed(1);

    let distanciaSazb = ((geolib.getPreciseDistance(sazb,{ latitude: latitudDecimal, longitude: longitudDecimal }))/1852).toFixed(1);

    let distanciaSavv = ((geolib.getPreciseDistance(savv,{ latitude: latitudDecimal, longitude: longitudDecimal }))/1852).toFixed(1);

    
    let distanciaAlBarcoDesdeAeropuertos = [distanciaSazm,distanciaSazb,distanciaSavv]

     res.render("main", { posicionDesplazada: puntoDesplazadoFinal,distanciaInicial:distanciaAlBarcoDesdeAeropuertos });

  },


  puntoProbableDeEncuentro: function(req, res) {
    // console.log(req.body)

    let latGrados = req.body.latGrados;
    let latMinutos = req.body.latMinutos;
    let latSegundos = req.body.latSegundos;

    let longGrados = req.body.longGrados;
    let longMinutos = req.body.longMinutos;
    let longSegundos = req.body.longSegundos;

    let rumbo = req.body.rumbo;

    let latitudDecimal = geolib.toDecimal(
      `${latGrados}° ${latMinutos}' ${latSegundos}" S`
    );

    let longitudDecimal = geolib.toDecimal(
      `${longGrados}° ${longMinutos}' ${longSegundos}" W`
    );

    let firstTime = moment(req.body.firstTime); //now
    let secondTime = moment(req.body.secondTime);
    let horaDecimales = (secondTime.diff(firstTime, "minutes") / 60).toFixed(1);
    let distanciaEnMetros = req.body.velocidad * horaDecimales * 1852;

    let puntoDesplazado = geolib.computeDestinationPoint(
      [longitudDecimal, latitudDecimal],
      distanciaEnMetros,
      rumbo
    );
    // console.log(latitudDecimal)
    // console.log(longitudDecimal)

    let puntoDesplazadoFinal = {
      latitude: geolib.decimalToSexagesimal(puntoDesplazado.latitude),
      longitude: geolib.decimalToSexagesimal(puntoDesplazado.longitude),
    };
    //  console.log(geolib.decimalToSexagesimal(puntoDesplazado.latitude))
    //  console.log(geolib.decimalToSexagesimal(puntoDesplazado.longitude))
    let puntoInicialdelBarco ={
        latitude: geolib.decimalToSexagesimal(latitudDecimal),
        longitude: geolib.decimalToSexagesimal(longitudDecimal),
    }

    let distanciaSazm = ((geolib.getPreciseDistance(sazm,{ latitude: puntoDesplazado.latitude, longitude: puntoDesplazado.longitude }))/1852).toFixed(1);

    let distanciaSazb = ((geolib.getPreciseDistance(sazb,{ latitude: puntoDesplazado.latitude, longitude: puntoDesplazado.longitude }))/1852).toFixed(1);

    let distanciaSavv = ((geolib.getPreciseDistance(savv,{ latitude: puntoDesplazado.latitude, longitude: puntoDesplazado.longitude }))/1852).toFixed(1);

    
    let distanciaAlBarcoDesdeAeropuertos = [distanciaSazm,distanciaSazb,distanciaSavv]

    let datosAportadosUsuario=[req.body.nombreBarco,req.body.velocidad,req.body.rumbo,req.body.firstTime,req.body.secondTime,puntoInicialdelBarco.latitude,puntoInicialdelBarco.longitude]


    res.render("puntoProbableDeEncuentro",{puntoDeEncuentro:puntoDesplazadoFinal,distanciaPuntoDeEncuentro:distanciaAlBarcoDesdeAeropuertos,datosBarco:datosAportadosUsuario})
  }


};

module.exports = mainController;
