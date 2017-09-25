angular.
  module('homeView').
  component('homeView', {
      templateUrl: 'home-view/homeView.template.html',
      controller: ['$http', '$cordovaInAppBrowser', function HomeTabController($http, $cordovaInAppBrowser) {
          var self = this;
          var options = {
              location: 'yes',
              clearcache: 'yes',
              toolbar: 'no'
          };
         self.OpenArticle = function (url) {
             $cordovaInAppBrowser.open(url, '_blank', options);
          };
          $http.get('data/home_art.json').then(function (response) {
              self.articles = response.data;
          });
      }]
  });