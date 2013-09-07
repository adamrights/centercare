'use strict';

describe('Filter: notAbsentStaff', function () {

  // load the filter's module
  beforeEach(module('centercareApp'));

  // initialize a new instance of the filter before each test
  var notAbsentStaff;
  beforeEach(inject(function ($filter) {
    notAbsentStaff = $filter('notAbsentStaff');
  }));

  it('should return the input prefixed with "notAbsentStaff filter:"', function () {
    var text = 'angularjs';
    expect(notAbsentStaff(text)).toBe('notAbsentStaff filter: ' + text);
  });

});
