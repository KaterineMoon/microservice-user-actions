  
"use strict";

var express = require("express");
var ProfileController = require("../controllers/profile");

var api = express.Router();

api.post('/profile/create', ProfileController.createProfile);
api.get('/profile/:id', ProfileController.getProfile);
api.delete("/profile/:id", ProfileController.deleteProfile);
api.put("/profile/:id", ProfileController.updateProfile);
api.get('/profile/list', ProfileController.getAllProfiles);


module.exports = api;