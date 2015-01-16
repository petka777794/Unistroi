'use strict';

/**
 * @ngdoc function
 * @name unibuildApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unibuildApp
 */
angular.module('unibuildApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
