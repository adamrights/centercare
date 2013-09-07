'use strict';

angular.module('centercareApp')
  .directive('notAbsentStaff', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the notAbsentStaff directive');
      }
    };
  });
