/*
    This file connects sections of the application to their corresponding controllers and .json data.
*/

angular.module('mainApp', ['ngMaterial']).
    controller('NavigationController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.currentNavItem = 'home';
        $scope.openSideNav = function (componentId) {
            $mdSidenav(componentId).toggle();
        }
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
    }]).
    controller('QuizzesTabController', ['$scope', '$http', '$cordovaInAppBrowser', function ($scope, $http, $cordovaInAppBrowser) {
        var options = {
            location: 'yes',
            clearcache: 'yes',
            toolbar: 'no'
        };
        $scope.OpenArticle = function (url) {
            $cordovaInAppBrowser.open(url, '_blank', options);
        };
        $http.get('data/quizzes_art.json').then(function (response) {
            $scope.articles = response.data;
        });
    }]);