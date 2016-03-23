'use strict';

angular.module('fullstackApp')
  .controller('postofficeCtrl', function ($scope , $state , postofficeResource) {
    $scope.message = 'Hello';

    CasesResource.query().$promise.then(function (response) {
        $scope.postoffice = response;
    });

    $scope.newCase = function(){
        $state.go('postoffice.new');
    };
  });
