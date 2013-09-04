'use strict';

/**
 * The main centercareApp module
 *
 * @type {angular.Module}
 */

angular.module('centercareApp', ['firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/room.html', //for dev only
        controller: 'RoomCtrl'
      })
      .when('/room', {
        templateUrl: 'views/room.html',
        controller: 'RoomCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
