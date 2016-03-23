'use strict';

describe('Controller: PostOfficeCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var PostOfficeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostOfficeCtrl = $controller('PostOfficeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
