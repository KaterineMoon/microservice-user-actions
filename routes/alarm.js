  
"use strict";

var express = require("express");
var AlarmController = require("../controllers/alarm");

var api = express.Router();

api.post('/alarm/create', AlarmController.createAlarm);
api.get("/alarm/list", AlarmController.getAllAlarms);
api.get('/alarm/:alarmId', AlarmController.getAlarm);
api.delete("/alarm/:alarmId", AlarmController.deleteAlarm);
api.put("/alarm/:alarmId", AlarmController.updateAlarm);


module.exports = api;