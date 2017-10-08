angular.
  module('mainApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/feed', {
          template: '<feed-view></feed-view>'
        }).
        otherwise('/feed');
    }
  ]);