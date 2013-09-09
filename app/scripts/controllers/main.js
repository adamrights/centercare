'use strict';

angular.module('centercareApp')
  .controller('MainCtrl', function ($scope) {
    $scope.ccModule= [
      {
        "displayName": "Brown Bears",
        "attributes" : {
          "minTotsMonthAge" : "42",
          "maxTotsMonthAge" : "72",
          "maxTotsToSeer" : "8",
        }];
        