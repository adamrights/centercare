'use strict';

/**
 * The main centercareApp module
 *
 * @type {angular.Module}
 */

angular.module('centercareApp', ['ui', 'LocalStorageModule', 'ui.bootstrap', 'firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/room', {
        templateUrl: 'views/room.html',
        controller: 'RoomCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
