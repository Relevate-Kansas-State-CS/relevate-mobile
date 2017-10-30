angular.
  module('mainApp').
    config(['$stateProvider', '$urlRouterProvider',
      /**
       * @function config
       * @memberof module:mainApp
       * @param $stateProvider State of the application.
       * @param $urlRouterProvider Routing provider of the application.
       * @description The function to configure the routes.
       */
      function config($stateProvider, $urlRouterProvider) {
          $stateProvider.
              state('feed', {
                  url: '/feed',
                  template: '<feed-view></feed-view><div ui-view></div>'
              }).
              state('feed.home', {
                  url: '/home',
                  data: {
                      'selectedItem': 'home'
                  }, 
                  template: '<home-view></home-view>'
              }).
              state('feed.trending', {
                  url: '/trending',
                  data: {
                      'selectedItem': 'trending'
                  }, 
                  template: '<trending-view></trending-view>'
              }).
              state('feed.recent', {
                  url: '/recent',
                  data: {
                      'selectedItem': 'recent'
                  }, 
                  template: '<recent-view></recent-view>'
              }).
              state('following', {
                  url: '/following',
                  template: '<following-view></following-view><div ui-view></div>'
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