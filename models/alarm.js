"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;;

var AlarmSchema = Schema({
  alarmId: ObjectId,
  idRoute: Number,
  location: String
}, {collection:"alarm"});

module.exports = mongoose.model("alarm", AlarmSchema);