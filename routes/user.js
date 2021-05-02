  
"use strict";

var express = require("express");
var UserController = require("../controllers/user");

var api = express.Router();

api.post('/user/create', UserController.createUser);
api.get('/user/list', UserController.getAllUsers);
api.get('/user/:userId', UserController.getUser);
api.delete("/user/:id", UserController.deleteUser);
api.put("/user/:id", UserController.updateUser);


module.exports = api;