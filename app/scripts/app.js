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
    //'gameResourceMock',
    'common.services',
    'firebase'
  ])
  .constant("FIREBASE_URL", "https://golfriends.firebaseio.com/")
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/games.html',
        controller: 'GamesCtrl as vm'
      })
      .when("/games/:gameId",{
            templateUrl: "../views/showGame.html",
            controller: "GameViewCtrl as vm"
       })
      .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'AuthCtrl',
          resolve: {
              user: function(auth){
                  return auth.resolveUser();
              }
          }
      })
      .when("/register",{
            templateUrl: "views/register.html",
            controller: "AuthCtrl",
            resolve:{
                user: function(auth){
                    auth.resolveUser();
                }
            }

       })
      .otherwise({
        redirectTo: '/'
      });
  });
