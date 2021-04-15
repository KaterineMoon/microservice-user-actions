"use strict";

//trabajar con ficheros
var fs = require('fs');
var path = require('path');

var User = require("../models/user");

function createUser(req, res) {

    var user = new User();
    var params = req.body;

    user.idUser = params.userId;
    user.profile = params.profileId;
    user.alarm = [];
    user.favorites = [];
    user.default = [];

    user.save((error, UserCreated) => {

        if (error){
        res.status(500).send(
            { message: "Server error" });
        }
        else{
            if (!UserCreated){
                res.status(400).send({ message: "The User can not be created" });
            } 
            else{
                res.status(200).send({ User: UserCreated })
            }
        }
    });
}

function getUser(req, res) {
    
    var UserId =  req.params.UserId;

    User.findOne({ _id: UserId }, (err, User) => {

        if (err){
            console.log(err)
            res.status(500).send({ message: "Server error" });
        } 
        else{
            if (!User){
                res.status(404).send({ message: "User not found" });
            } 
            else{
                res.status(200).send({ User: User })
            }
        
        }
    });
}

function updateUser(req, res) {

    var UserId = req.params.UserId;
    var newInformation = req.body;

    User.findByIdAndUpdate(

        UserId,
        newInformation,
        (error, updatedUser) => {
            if (error){
                res.status(500).send({ message: "Server error" });
            } 
            else{
                if (!updatedUser){
                    res.status(400).send({ message: "The User can not be updated" });
                } 
                else{
                    res.status(200).send({ User: updatedUser });
                }
            }
        }
    );
}

function deleteUser(req, res) {

    var UserId = req.params.UserId;

    User.findByIdAndRemove(UserId, (error, deletedUser) => {

        if (error){
            res.status(500).send({ message: "Server error" });
        } 
        else{
            if (!deletedUser){
                res.status(400).send({ message: "The User can not be deleted" });
            } 
            else{
                res.status(200).send({ User: deletedUser });
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
                res.status(200).send({ users });
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