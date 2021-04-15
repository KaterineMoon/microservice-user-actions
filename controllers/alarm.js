"use strict";

//trabajar con ficheros
var fs = require('fs');
var path = require('path');

var Alarm = require("../models/alarm");

function createAlarm(req, res) {

  var alarm = new Alarm();
  var params = req.body;

  alarm.idRoute = params.routeId;
  alarm.location = params.location;

  alarm.save((error, alarmCreated) => {

    if (error){
      res.status(500).send(
        { message: "Server error" });
    }
    else{
        if (!alarmCreated){
            res.status(400).send({ message: "The alarm can not be created" });
        } 
        else{
            res.status(200).send({ alarm: alarmCreated })
        }
    }
  });
}

function getAlarm(req, res) {
    
    var alarmId =  req.params.alarmId;

    Alarm.findOne({ _id: alarmId }, (err, alarm) => {

        if (err){
            console.log(err)
            res.status(500).send({ message: "Server error" });
        } 
        else{
            if (!alarm){
                res.status(404).send({ message: "Alarm not found" });
            } 
            else{
                res.status(200).send({ alarm: alarm })
            }
        
        }
    });
}

function updateAlarm(req, res) {

    var alarmId = req.params.alarmId;
    var newInformation = req.body;

    Alarm.findByIdAndUpdate(

        alarmId,
        newInformation,
        (error, updatedAlarm) => {
            if (error){
                res.status(500).send({ message: "Server error" });
            } 
            else{
                if (!updatedAlarm){
                    res.status(400).send({ message: "The alarm can not be updated" });
                } 
                else{
                    res.status(200).send({ alarm: updatedAlarm });
                }
            }
        }
    );
}

function deleteAlarm(req, res) {

    var alarmId = req.params.alarmId;

    Alarm.findByIdAndRemove(alarmId, (error, deletedAlarm) => {

        if (error){
            res.status(500).send({ message: "Server error" });
        } 
        else{
            if (!deletedAlarm){
                res.status(400).send({ message: "The alarm can not be deleted" });
            } 
            else{
                res.status(200).send({ alarm: deletedAlarm });
            }
        }
    });
}

function getAllAlarms(req, res) {

    Alarm.find((error, alarms) => {

        if (error){
            res.status(500).send("Server error");
        } 
        else{
            if (!users) {
                res.status(404).send({ message: "Users not found" });
            } 
            else
            {
                res.status(200).send({ alarms });
            }
        }
    });
}

module.exports = {
    createAlarm,
    getAlarm,
    updateAlarm,
    deleteAlarm,
    getAllAlarms
};