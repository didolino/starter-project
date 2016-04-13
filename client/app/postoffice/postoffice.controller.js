'use strict';

angular.module('fullstackApp')
  .controller('postofficeCtrl', function ($scope , $state , postofficeResource) {
    $scope.message = 'Hello';


    $scope.getpostoffice = function functionName() {
           postofficeResource.query().$promise.then(function (response) {
               $scope.postoffice = response;
           });
       };

         $scope.getpostoffice();
         
    $scope.newpostoffice = function(){
        $state.go('postoffice.new');
    };

    $scope.edit = function(officeId){
      $state.go('postoffice.edit' , {id: officeId});
    };
    $scope.delete = function(officeId) {
         postofficeResource.delete({id : officeId}).$promise.then(function (){
             $scope.getpostoffice();
         });
     };



  });
