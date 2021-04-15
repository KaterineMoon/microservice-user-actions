"use strict";

//trabajar con ficheros
var fs = require('fs');
var path = require('path');

var Profile = require("../models/profile");

function createProfile(req, res) {

    var profile = new Profile();
    var params = req.body;

    profile.name = params.name;
    profile.email = params.email;

    profile.save((error, profileCreated) => {

        if (error){
        res.status(500).send(
            { message: "Server error" });
        }
        else{
            if (!profileCreated){
                res.status(400).send({ message: "The profile can not be created" });
            } 
            else{
                res.status(200).send({ profile: profileCreated })
            }
        }
    });
}

function getProfile(req, res) {
    
    var profileId =  req.params.profileId;

    Profile.findOne({ _id: profileId }, (err, profile) => {

        if (err){
            console.log(err)
            res.status(500).send({ message: "Server error" });
        } 
        else{
            if (!profile){
                res.status(404).send({ message: "Profile not found" });
            } 
            else{
                res.status(200).send({ profile: profile })
            }
        
        }
    });
}

function updateProfile(req, res) {

    var profileId = req.params.profileId;
    var newInformation = req.body;

    Profile.findByIdAndUpdate(

        profileId,
        newInformation,
        (error, updatedProfile) => {
            if (error){
                res.status(500).send({ message: "Server error" });
            } 
            else{
                if (!updatedProfile){
                    res.status(400).send({ message: "The profile can not be updated" });
                } 
                else{
                    res.status(200).send({ profile: updatedProfile });
                }
            }
        }
    );
}

function deleteProfile(req, res) {

    var profileId = req.params.profileId;

    Profile.findByIdAndRemove(profileId, (error, deletedProfile) => {

        if (error){
            res.status(500).send({ message: "Server error" });
        } 
        else{
            if (!deletedProfile){
                res.status(400).send({ message: "The profile can not be deleted" });
            } 
            else{
                res.status(200).send({ profile: deletedProfile });
            }
        }
    });
    }

function uploadImage(req, res) {

    var profileId = req.params.profileId;
    var file_name = 'No image';

    if (req.files){
        var file_path = req.files.image.path;
        var file_split = file_path.split('\\');
        //get filename
        var file_name = file_split[2];

        //get file extension
        var exp_split = file_name.split('\.');
        var file_ext = exp_split[1];

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif') {

            Profile.findByIdAndUpdate(profileId, { image: file_name }, (err, profileUpdated) => {

                if (err){
                    res.status(500).send({ message: "Server error" });
                } 
                else{
                    if (!profileUpdated) {
                        res.status(400).send({ message: "The profile can not be updated" });
                    } else {
                        res.status(200).send({ profile: profileUpdated });
                    }
                }
            });
        } 
        else{
            res.status(400).send({ message: "Invalid file extension" });
        }

        console.log(file_path);

    } 
    else{
        res.status(400).send({ message: "No image uploaded" });
    }
}

function getImage(req, res) {

    var imageFile = req.params.imageFile; 
    var path_file = './uploads/usuario/' + imageFile;

    //check if the image exists
    fs.exists(path_file, function (exists) {

        if (exists){
            res.sendFile(path.resolve(path_file));
        } 
        else
        {
            res.status(404).send({ message: "Image not found" });
        }
    });
}

function getAllProfiles(req, res) {

    Profile.find({}, (error, profiles) => {

        if (error){
            res.status(500).send("Server error");
        } 
        else{
            console.log(profiles);
            if (!profiles){
                res.status(404).send({ message: "Profiles not found" });
            } 
            else{

                res.status(200).send({ profiles });
            }
        }
    });
  }


module.exports = {
    createProfile,
    getProfile,
    updateProfile,
    deleteProfile,
    uploadImage,
    getImage,
    getAllProfiles
};