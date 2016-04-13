'use strict';

angular.module('fullstackApp')
  .controller('postofficeEditCtrl', function ($scope, $stateParams ,$state, postofficeResource) {
    $scope.message = 'Hello';


    if($stateParams.id){
        postofficeResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.postoffice = response;
        });
    }

    $scope.save = function(){

        if(!$stateParams.id){
          console.log('save');
        postofficeResource.save($scope.postoffice).$promise.then(function(response){
            $scope.postoffice = response;
            $state.go('postoffice.edit', {id : $scope.postoffice._id });
        });
      }else{

        postofficeResource.update({ id: $stateParams.id} , $scope.postoffice).$promise.then(function(response){
          console.log(response);
            $scope.postoffice = response;
        });
      }

    }

  });
