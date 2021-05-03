  
"use strict";

var express = require("express");
var ProfileController = require("../controllers/profile");

var api = express.Router();

api.get('/profile', ProfileController.getAllProfiles);
api.get('/profile/:profileId', ProfileController.getProfile);
api.post('/profile', ProfileController.createProfile);
api.delete("/profile/:profileId", ProfileController.deleteProfile);
api.put("/profile/:profileId", ProfileController.updateProfile);


module.exports = api;