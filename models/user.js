"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = Schema({
  idUser: Number,
  profile: String,
  alarm: [ String ],
  favorites: [ Number ],
  default: [ Number ]
});

module.exports = mongoose.model("user", UserSchema);