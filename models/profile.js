"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ProfileSchema = Schema({
  profileId: ObjectId,
  name: String,
  email: String,
  image: String
});

module.exports = mongoose.model("profile", ProfileSchema);