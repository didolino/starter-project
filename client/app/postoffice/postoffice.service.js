'use strict';

angular.module('fullstackApp')
.factory('postofficeResource', function ($resource) {
    return $resource('/api/offices/:id/', {
        id: '@id'
    },{
        update: {
            method: 'PUT'
        }
    });
});
