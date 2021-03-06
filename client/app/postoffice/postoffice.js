'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('postoffice', {
        url: '/postoffice',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('postoffice.list', {
        url: '',
        controller: 'postofficeCtrl',
        templateUrl: 'app/postoffice/postoffice.html'
      })
      .state('postoffice.edit', {
        url: '/:id/edit',
        controller: 'postofficeEditCtrl',
        templateUrl: 'app/postoffice/postoffice.Edit.html'
      })
      .state('postoffice.new', {
        url: '/new',
        controller: 'postofficeEditCtrl',
        templateUrl: 'app/postoffice/postoffice.Edit.html'
    });

  });
