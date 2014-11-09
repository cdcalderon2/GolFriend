/* global app:true */
/* exported app */

'use strict';

/**
 * @ngdoc overview
 * @name golfriendsApp
 * @description
 * # golfriendsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('golfriendsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'gameResourceMock',
    'common.services'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/games.html',
        controller: 'GamesCtrl as vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
