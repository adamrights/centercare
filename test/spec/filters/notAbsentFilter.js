'use strict';

describe('Filter: notAbsentFilter', function () {

  // load the filter's module
  beforeEach(module('centercareApp'));

  // initialize a new instance of the filter before each test
  var notAbsentFilter;
  beforeEach(inject(function ($filter) {
    notAbsentFilter = $filter('notAbsentFilter');
  }));

  it('should return the input prefixed with "notAbsentFilter filter:"', function () {
    var text = 'angularjs';
    expect(notAbsentFilter(text)).toBe('notAbsentFilter filter: ' + text);
  });

});
