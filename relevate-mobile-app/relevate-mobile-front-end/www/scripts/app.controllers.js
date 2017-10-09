angular.module('mainApp').
    controller('NavigationController', ['$scope', function ($scope) {
        $scope.onSwipeRight = function (ev) {
            alert('You swiped right!!');
        };
    }]).
    controller('FeedController', ['$scope', function ($scope) {
        $scope.currentNavItem = 'home';
    }]).
    controller('HomeTabController', ['$scope', '$http', '$cordovaInAppBrowser', function ($scope, $http, $cordovaInAppBrowser) {
        var options = {
            location: 'yes',
            clearcache: 'yes',
            toolbar: 'no'
        };
        $scope.OpenArticle = function (url) {
            $cordovaInAppBrowser.open(url, '_blank', options);
        };
        $http.get('data/home_art.json').then(function (response) {
            $scope.articles = response.data;
        });
    }]).
    controller('TrendingTabController', ['$scope', '$http', '$cordovaInAppBrowser', function ($scope, $http, $cordovaInAppBrowser) {
        var options = {
            location: 'yes',
            clearcache: 'yes',
            toolbar: 'no'
        };
        $scope.OpenArticle = function (url) {
            $cordovaInAppBrowser.open(url, '_blank', options);
        };
        $http.get('data/trending_art.json').then(function (response) {
            $scope.articles = response.data;
        });
    }]).
    controller('RecentTabController', ['$scope', '$http', '$cordovaInAppBrowser', function ($scope, $http, $cordovaInAppBrowser) {
        var options = {
            location: 'yes',
            clearcache: 'yes',
            toolbar: 'no'
        };
        $scope.OpenArticle = function (url) {
            $cordovaInAppBrowser.open(url, '_blank', options);
        };
        $http.get('data/recent_art.json').then(function (response) {
            $scope.articles = response.data;
        });
    }]);