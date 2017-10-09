﻿angular.
  module('mainApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<home-view></home-view>'
        }).
        when('/trending', {
          template: '<trending-view></trending-view>'
        }).
        when('/recent', {
          template: '<recent-view></recent-view>'
        }).
        when('/quizzes', {
           template: '<quizzes-view></quizzes-view>'
        }).
        when('/journals', {
           template: '<journals-view></journals-view>'
        }).
        otherwise('/home');
    }
  ]);