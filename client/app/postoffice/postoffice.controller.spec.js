'use strict';

describe('Controller: postofficeCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var postofficeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    postofficeCtrl = $controller('postofficeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
