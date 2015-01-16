'use strict';

/**
 * @ngdoc overview
 * @name unibuildApp
 * @description
 * # unibuildApp
 *
 * Main module of the application.
 */
angular
  .module('unibuildApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/rent', {
            templateUrl: 'views/rent.html',
            controller: 'RentCtrl'
        })
        .when('/transportation', {
            templateUrl: 'views/transportation.html',
            controller: 'TransportationCtrl'
        })
        .when('/build', {
            templateUrl: 'views/build.html',
            controller: 'BuildCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
