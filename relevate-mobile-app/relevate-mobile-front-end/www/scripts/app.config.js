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
              state('quizzes', {
                  url: '/quizzes',
                  template: '<quizzes-view></quizzes-view><div ui-view></div>'
              }).
              state('journals', {
                  url: '/journals',
                  template: '<journals-view></journals-view><div ui-view></div>'
              });
          $urlRouterProvider.otherwise('/feed/home');
      }
  ]);