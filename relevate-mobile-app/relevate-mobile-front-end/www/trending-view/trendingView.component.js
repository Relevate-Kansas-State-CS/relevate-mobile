angular.
    module('trendingView').
    component('trendingView', {
        templateUrl: 'trending-view/trendingView.template.html',
        controller: ['$http', '$cordovaInAppBrowser', function TrendingTabController($http, $cordovaInAppBrowser) {
            var self = this;
            var options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            };
            self.OpenArticle = function (url) {
                $cordovaInAppBrowser.open(url, '_blank', options);
            };
            $http.get('data/trending_art.json').then(function (response) {
                self.articles = response.data;
            });
        }]
    });