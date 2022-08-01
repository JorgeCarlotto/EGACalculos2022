

let mainController = {

index: function(req,res){

    res.render("main")
    
},

cargarDatos: function(req,res){
    console.log(req.body)
}


}

module.exports = mainController;