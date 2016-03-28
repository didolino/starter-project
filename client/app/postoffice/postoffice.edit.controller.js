'use strict';

angular.module('fullstackApp')
  .controller('postofficeEditCtrl', function ($scope , postofficeResource) {
    $scope.message = 'Hello';

    $scope.save = function(){
        postofficeResource.save($scope.postoffice).$promise.then(function(response){
            console.log(response);
            $scope.postoffice = response;
        });
    };
  });
