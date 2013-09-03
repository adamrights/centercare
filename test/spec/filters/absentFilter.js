'use strict';

describe('Filter: absentFilter', function () {

  // load the filter's module
  beforeEach(module('centercareApp'));

  // initialize a new instance of the filter before each test
  var absentFilter;
  beforeEach(inject(function ($filter) {
    absentFilter = $filter('absentFilter');
  }));

  it('should return the input prefixed with "absentFilter filter:"', function () {
    var text = 'angularjs';
    expect(absentFilter(text)).toBe('absentFilter filter: ' + text);
  });

});
