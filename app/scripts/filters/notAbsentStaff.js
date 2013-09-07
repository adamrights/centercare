'use strict';

angular.module('centercareApp')
  .filter('notAbsentStaffFilter', function () {
    return function (input) {
      var notAbsentStaff = {};
      angular.forEach(input, function (person, id){
        if (person.staff){
          notAbsentStaff[id] = person;
        }
      });
      return notAbsentStaff;
    };
  });