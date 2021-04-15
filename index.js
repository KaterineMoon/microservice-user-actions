"use strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = 3000;

mongoose.connect("mongodb://localhost:27017/userActionsDB", (err, res) => {

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