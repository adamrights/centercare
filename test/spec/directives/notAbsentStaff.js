'use strict';

describe('Directive: notAbsentStaff', function () {

  // load the directive's module
  beforeEach(module('centercareApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<not-absent-staff></not-absent-staff>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the notAbsentStaff directive');
  }));
});
