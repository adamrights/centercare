'use strict';

angular.module('centercareApp')
  .filter('absentFilter', function () {
    return function (input) {
        var absent = {};
        angular.forEach(input, function (person, id) {
            if (person.absent) {
                absent[id] = person;
                }
            });
      return absent;
    };
  });

