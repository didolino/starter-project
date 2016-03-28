'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OfficeSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Office', OfficeSchema);