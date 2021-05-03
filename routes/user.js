"use strict";

var express = require("express");
var UserController = require("../controllers/user");

var api = express.Router();

api.get('/user', UserController.getAllUsers);
api.get('/user/:userId', UserController.getUser);
api.post('/user', UserController.createUser);
api.delete("/user/:id", UserController.deleteUser);
api.put("/user/:id", UserController.updateUser);


module.exports = api;