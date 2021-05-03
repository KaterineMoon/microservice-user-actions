  
"use strict";

var express = require("express");
var AlarmController = require("../controllers/alarm");

var api = express.Router();

api.get("/alarm", AlarmController.getAllAlarms);
api.get("/alarm/test", AlarmController.testing);
api.get('/alarm/:alarmId', AlarmController.getAlarm);
api.post('/alarm', AlarmController.createAlarm);
api.delete("/alarm/:alarmId", AlarmController.deleteAlarm);
api.put("/alarm/:alarmId", AlarmController.updateAlarm);


module.exports = api;