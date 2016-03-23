'use strict';

angular.module('fullstackApp')
.factory('postofficeResource', function ($resource) {
    return $resource('/api/postoffice/:id/', {
        id: '@id'
    },{
        update: {
            method: 'PUT'
        }
    });
});
