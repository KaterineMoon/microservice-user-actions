"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProfileSchema = Schema({
  name: String,
  email: String,
  image: String
});

module.exports = mongoose.model("profile", ProfileSchema);