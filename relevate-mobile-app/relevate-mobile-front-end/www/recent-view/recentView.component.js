angular.
    module('recentView').
    component('recentView', {
        templateUrl: 'recent-view/recentView.template.html',
        controller: ['$http', '$cordovaInAppBrowser', function RecentTabController($http, $cordovaInAppBrowser) {
            var self = this;
            var options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            };
            self.OpenArticle = function (url) {
                $cordovaInAppBrowser.open(url, '_blank', options);
            };
            $http.get('data/recent_art.json').then(function (response) {
                self.articles = response.data;
            });
        }]
    });