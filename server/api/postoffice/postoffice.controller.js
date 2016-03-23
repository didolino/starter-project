'use strict';

var _ = require('lodash');
var PostOffice = require('./PostOffice.model');

// Get list of PostOffices
exports.index = function(req, res) {
  PostOffice.find(function (err, PostOffices) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(PostOffices);
  });
};

// Get a single PostOffice
exports.show = function(req, res) {
  PostOffice.findById(req.params.id, function (err, PostOffice) {
    if(err) { return handleError(res, err); }
    if(!PostOffice) { return res.status(404).send('Not Found'); }
    return res.json(PostOffice);
  });
};

// Creates a new PostOffice in the DB.
exports.create = function(req, res) {
  PostOffice.create(req.body, function(err, PostOffice) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(PostOffice);
  });
};

// Updates an existing PostOffice in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  PostOffice.findById(req.params.id, function (err, PostOffice) {
    if (err) { return handleError(res, err); }
    if(!PostOffice) { return res.status(404).send('Not Found'); }
    var updated = _.merge(PostOffice, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(PostOffice);
    });
  });
};

// Deletes a PostOffice from the DB.
exports.destroy = function(req, res) {
  PostOffice.findById(req.params.id, function (err, PostOffice) {
    if(err) { return handleError(res, err); }
    if(!PostOffice) { return res.status(404).send('Not Found'); }
    PostOffice.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}