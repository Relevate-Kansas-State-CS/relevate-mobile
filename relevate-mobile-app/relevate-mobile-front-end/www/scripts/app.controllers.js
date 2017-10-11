/*
    This file connects sections of the application to their corresponding controllers and .json data.
*/

angular.module('mainApp').
    controller('NavigationController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.openSideNav = function () {
            $mdSidenav('left').open();
        };
    }]).
    controller('SideNavController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.closeSideNav = function () {
            $mdSidenav('left').close();
        };
    }]).
    controller('ArticleDialogController', ['$scope', '$cordovaInAppBrowser', '$mdDialog', 'article', function ($scope, $cordovaInAppBrowser, $mdDialog, article) {
        $scope.article = article;
        var options = {
            location: 'yes',
            clearcache: 'yes',
            toolbar: 'no'
        };
        $scope.OpenArticle = function (url) {
            $cordovaInAppBrowser.open(url, '_blank', options);
        };
        $scope.Close = function () {
            $mdDialog.hide();
        };
    }]).
    controller('FeedController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.openSideNav = function () {
            $mdSidenav('left').open();
        };
        $scope.currentNavItem = 'home';
    }]).
    controller('HomeTabController', ['$scope', '$http', '$cordovaInAppBrowser', '$mdDialog', function ($scope, $http, $cordovaInAppBrowser, $mdDialog) {
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
        $scope.OpenDialog = function (art) {
            $mdDialog.show({
                controller: 'ArticleDialogController',
                templateUrl: 'dialogs/article.template.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                locals: { article: art }
            })
        };
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
    controller('QuizzesTabController', ['$scope', '$http', '$cordovaInAppBrowser', '$mdSidenav', function ($scope, $http, $cordovaInAppBrowser, $mdSidenav) {
        $scope.openSideNav = function () {
            $mdSidenav('left').open();
        };
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
    }]).
    controller('JournalsTabController', ['$scope', '$http', '$cordovaInAppBrowser', '$mdSidenav', function ($scope, $http, $cordovaInAppBrowser, $mdSidenav) {
        $scope.openSideNav = function () {
            $mdSidenav('left').open();
        };
        var options = {
            location: 'yes',
            clearcache: 'yes',
            toolbar: 'no'
        };
        $scope.OpenArticle = function (url) {
            $cordovaInAppBrowser.open(url, '_blank', options);
        };
        $http.get('data/journals_art.json').then(function (response) {
            $scope.articles = response.data;
        });
    }]);