/*  
    This component controls basic aspects of the "Home" tab in the mobile application.
    
    Of particular importance is: $http.get('data/home_art.json') .... Which specifies a .json file (located in the data folder) that contains data about what the Home tab should display,
    such as the article title and image, an article description, the external URL it links to, and its associated tags.
*/

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