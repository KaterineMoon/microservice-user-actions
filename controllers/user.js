"use strict";

//trabajar con ficheros
var fs = require('fs');
var path = require('path');

var User = require("../models/user");

function createUser(req, res) {

    var user = new User();
    var params = req.body;

    user.idUser = params.idUser;
    user.profile = params.profile;
    user.alarm = [];
    user.favorites = [];
    user.default = [];

    user.save((error, userCreated) => {

        if (error){
        res.status(500).send(
            { message: "Server error" });
        }
        else{
            if (!userCreated){
                res.status(400).send({ message: "The user can not be created" });
            } 
            else{
                res.status(200).send( userCreated )
            }
        }
    });
}

function getUser(req, res) {
    
    var userId =  req.params.userId;

    User.findOne({ _id: userId }, (err, user) => {

        if (err){
            console.log(err)
            res.status(500).send({ message: "Server error" });
        } 
        else{
            if (!user){
                res.status(404).send({ message: "User not found" });
            } 
            else{
                res.status(200).send( user )
            }
        
        }
    });
}

function updateUser(req, res) {

    var userId = req.params.userId;
    var newInformation = req.body;

    User.findByIdAndUpdate(

        userId,
        newInformation,
        (error, updatedUser) => {
            if (error){
                res.status(500).send({ message: "Server error" });
            } 
            else{
                if (!updatedUser){
                    res.status(400).send({ message: "The user can not be updated" });
                } 
                else{
                    res.status(200).send( updatedUser );
                }
            }
        }
    );
}

function deleteUser(req, res) {

    var userId = req.params.userId;

    User.findByIdAndRemove(userId, (error, deletedUser) => {

        if (error){
            res.status(500).send({ message: "Server error" });
        } 
        else{
            if (!deletedUser){
                res.status(400).send({ message: "The User can not be deleted" });
            } 
            else{
                res.status(200).send( deletedUser );
            }
        }
    });
}

function getAllUsers(req, res) {

    User.find((error, users) => {

        if (error){
            res.status(500).send("Server error");
        } 
        else{
            if (!users) {
                res.status(404).send({ message: "Users not found" });
            } 
            else
            {
                res.status(200).send( users );
            }
        }
    });
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    getAllUsers
};