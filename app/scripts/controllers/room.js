/*global centercare, angular, Firebase */


'use strict';

angular.module('centercareApp')
  .controller('RoomCtrl', function ($scope, angularFire) {
    this.onDataLoaded = function onDataLoaded($scope, url) {
      $scope.$watch('rooms', function ()  {
        var total = 0;
        var absent = 0;
        angular.forEach($scope.rooms, function (inPerson) {
          if (inPerson.absent === false){
            total++;
          }
          if (inPerson.absent === true) {
            absent++;
          }
        });
        $scope.totalCount = total;
        $scope.absentCount = absent;
      }, true);

      $scope.addInPerson = function () {
        var newInPerson = $scope.inPerson.value; 
        if (!newInPerson.length) {
          return;
        }
        $scope.rooms[new Firebase(url).push().name()] = {
          name: newInPerson,
          absent: false
        };
        $scope.inPerson = {value: ''};
      };

      $scope.toggleAbsent = function (id) {
        if ($scope.rooms[id].absent === false) {
          $scope.rooms[id].absent=true;
        }
        else {
          $scope.rooms[id].absent=false;
        }
      };

      $scope.deleteFromRoom = function (id) {
        delete $scope.rooms[id];
      };
    };  // end of onDataLoaded
    var url = 'http://centercare.firebaseio.com/rooms';

    $scope.centerSessionOutList = {
      name: 'names',
      local: ['Ali Kang', 'Alan Wan', 'Ari Skind', 'Ark Rsas', 'Danny California', ' Miles Colorado', ' Harry Connecticut', 'Louis Delare', 'Ryder Florida', 'Sam Georgia', 'Haw Ywasaii', 'Mandy Idaho', 'Illiana Anois', 'Indy Jones', 'Holly Iowa', 'Kant Immanual', 'Fred Kentu', 'Louis Xiana', 'Milford Maine', 'Mary Landau', 'Massach Vetts', 'Michial Yogan', 'Minnesota Wild', 'Missi Rissii', 'Sour Apple', 'Montana Jones', 'Angel Texas', 'Uta Tikembo', 'Vert Greenmont', 'Dan Virgin', 'Sam Washington', 'Colin West', 'Wintin Whisksin', 'Wilma Wyoming']
    }; //will be an http.get (currently fetched from rails api)
    $scope.roomOutList = $scope.centerSessionOutList;
    $scope.currentRoomName = 'Brown Bear A'; // bootstrap until $http.get
    angularFire(new Firebase(url), $scope,'rooms', {}).then(function () {
      this.onDataLoaded($scope, url);
    }.bind(this));
  });

