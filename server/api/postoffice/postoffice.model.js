'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostOfficeSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('PostOffice', PostOfficeSchema);