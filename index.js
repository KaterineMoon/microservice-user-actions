"use strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = 3000;

mongoose.connect("mongodb+srv://archi:archiroot@cluster0.fzexm.mongodb.net/userActionsDB?authSource=admin", (err, res) => {

    if (err){
        throw err;
    } 
    else{
        console.log("Database connected!");
        app.listen(port, () => {
            console.log("Server listening in port " + port);
        });
    }
});