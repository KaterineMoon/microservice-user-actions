  
"use strict";

var express = require("express");
var AlarmController = require("../controllers/alarm");

var api = express.Router();

api.post('/alarm/create', AlarmController.createAlarm);
api.get('/alarm/:id', AlarmController.getAlarm);
api.delete("/alarm/:id", AlarmController.deleteAlarm);
api.put("/alarm/:id", AlarmController.updateAlarm);
api.get("/alarm/list", AlarmController.getAllAlarms);


module.exports = api;