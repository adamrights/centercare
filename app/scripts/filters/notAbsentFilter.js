'use strict';

angular.module('centercareApp')
  .filter('notAbsentFilter', function () {
    return function (input) {
      var notAbsent = {};
      angular.forEach(input, function (person, id){
        if (!person.absent){
          notAbsent[id] = person;
        }
      });
      return notAbsent;
    };
  });
