'use strict';

/**
 * @ngdoc function
 * @name unibuildApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the unibuildApp
 */
angular.module('unibuildApp')
    .controller('BuildCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });