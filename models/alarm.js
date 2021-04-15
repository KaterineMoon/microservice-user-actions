"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AlarmSchema = Schema({
  idRoute: Number,
  location: String
}, {collection:"alarm"});

module.exports = mongoose.model("alarm", AlarmSchema);