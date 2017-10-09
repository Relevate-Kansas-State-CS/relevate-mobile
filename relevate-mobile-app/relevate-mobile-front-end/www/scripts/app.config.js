angular.
  module('mainApp').
  config(['$stateProvider', '$urlRouterProvider',
      function config($stateProvider, $urlRouterProvider) {
          $stateProvider.
              state('feed', {
                  url: '/feed',
                  template: '<feed-view></feed-view><div ui-view></div>'
              }).
              state('feed.home', {
                  url: '/home',
                  template: '<home-view></home-view>'
              }).
              state('feed.trending', {
                  url: '/trending',
                  template: '<trending-view></trending-view>'
              }).
              state('feed.recent', {
                  url: '/recent',
                  template: '<recent-view></recent-view>'
              }).
              state('activities', {
                  url: '/activities',
                  template: '<quizzes-view></quizzes-view>'
              });
          $urlRouterProvider.otherwise('/feed/home');
      }
  ]);