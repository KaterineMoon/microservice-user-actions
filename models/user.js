"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = Schema({
  userId: ObjectId,
  idUser: Number,
  profile: String,
  alarm: [ String ],
  favorites: [ Number ],
  default: [ Number ]
});

module.exports = mongoose.model("user", UserSchema);