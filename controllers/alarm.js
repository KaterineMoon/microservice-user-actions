"use strict";

const { log } = require('console');
//trabajar con ficheros
var fs = require('fs');
var path = require('path');

var Alarm = require("../models/alarm");

function createAlarm(req, res) {

  var alarm = new Alarm();
  var params = req.body;

  alarm.idRoute = params.idRoute;
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
            res.status(200).send( alarmCreated )
        }
    }
  });
}

function getAlarm(req, res) {
    
    var alarmId =  req.params.alarmId;

    console.log(alarmId);
    console.log(typeof(alarmId));

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
                res.status(200).send( alarm )
                console.log(alarm);
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
                    res.status(200).send( updatedAlarm );
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
                res.status(200).send( deletedAlarm );
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
            if (!alarms) {
                res.status(404).send({ message: "Users not found" });
            } 
            else
            {
                res.status(200).send( alarms );
            }
        }
    });
}

function testing(req, res) {
    
    var alarmId = "608eed73b27c6531a8cefabe"

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
                res.status(200).send( alarm )
                console.log(alarm);
            }
        
        }
    });
}

module.exports = {
    createAlarm,
    getAlarm,
    updateAlarm,
    deleteAlarm,
    getAllAlarms,
    testing
};