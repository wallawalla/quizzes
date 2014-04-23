'use strict';

describe('Controller: ThemesctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('quizzesApp'));

  var ThemesctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThemesctrlCtrl = $controller('ThemesctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
