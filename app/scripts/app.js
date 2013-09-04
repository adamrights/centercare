'use strict';

/**
 * The main centercareApp module
 *
 * @type {angular.Module}
 */

angular.module('centercareApp', ['firebase', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/room.html', //for dev of room
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
