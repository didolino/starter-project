'use strict';

angular.module('fullstackApp')
  .controller('postofficeCtrl', function ($scope , $state , postofficeResource) {
    $scope.message = 'Hello';

    postofficeResource.query().$promise.then(function (response) {
        $scope.postoffice = response;
    });

    $scope.newpostoffice = function(){
        $state.go('postoffice.new');
    };

    $scope.edit = function(officeId){
      $state.go('postoffice.edit' , {id: officeId});
    }

  });
