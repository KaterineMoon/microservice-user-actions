  
"use strict";

var express = require("express");
var ProfileController = require("../controllers/profile");

var api = express.Router();

api.post('/profile/create', ProfileController.createProfile);
api.get('/profile/list', ProfileController.getAllProfiles);
api.get('/profile/:profileId', ProfileController.getProfile);
api.delete("/profile/:profileId", ProfileController.deleteProfile);
api.put("/profile/:profileId", ProfileController.updateProfile);


module.exports = api;