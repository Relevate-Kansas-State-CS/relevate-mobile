/**
 * @module controllers
 * @description These are all the controllers for the application.
 */
angular.module('mainApp').
    /**
     * @function NavigationController
     * @requires $scope
     * @requires $mdSidenav
     * @param $scope The scope of the controller.
     * @param $mdSidenav Used to configure the side navigation bar.
     * @description This controller handles basic navigation on the application.
     */
    controller('NavigationController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.openSideNav = function () {
            $mdSidenav('left').open();
        };
    }]).
    /**
     * @function SideNavController
     * @requires $scope
     * @requires $mdSidenav
     * @param $scope The scope of the controller.
     * @param $mdSidenav Used to configure the side navigation bar.
     * @description This controller handles navigation from the side navigation bar.
     */
    controller('SideNavController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.closeSideNav = function () {
            $mdSidenav('left').close();
        };
    }]).
    /**
     * @function ArticleDialogController
     * @requires $scope
     * @requires $cordovaInAppBrowser
     * @requires $mdDialog
     * @requires article
     * @see HomeTabController
     * @param $scope The scope of the controller.
     * @param $cordovaInAppBrowser Used for opening articles in application.
     * @param $mdDialog Used to create dialogs in the application.
     * @param article The article data for this controller
     * @description This controller handles an article dialog event.
     */
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
    /**
     * @function FeedController
     * @requires $scope
     * @requires $mdSidenav
     * @requires $transitions
     * @param $scope The scope of the controller.
     * @param $mdSidenav Used to configure the side navigation bar.
     * @param $transitions Used to look at routing changes.
     * @description This is the main controller for the feed.
     */
    controller('FeedController', ['$scope', '$mdSidenav', '$transitions', function ($scope, $mdSidenav, $transitions) {
        $scope.openSideNav = function () {
            $mdSidenav('left').open();
        };
        $scope.currentNavItem = 'home';
        $transitions.onSuccess({}, function (trans) {
            var path = trans.to();
            if (path === 'feed') {
                $scope.currentNavItem = trans.to().data.selectedItem;
            }
        });
    }]).
    /**
     * @function HomeTabController
     * @requires $scope
     * @requires $http
     * @requires $cordovaInAppBrowser
     * @requires $mdDialog
     * @param $scope The scope of the controller.
     * @param $http Used to retrieve data for articles.
     * @param $cordovaInAppBrowser Used for opening articles in application.
     * @param $mdDialog Used to create dialogs in the application.
     * @description This controller handles the home tab of the feed view.
     */
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
    /**
     * @function TrendingTabController
     * @requires $scope
     * @requires $http
     * @requires $cordovaInAppBrowser
     * @param $scope The scope of the controller.
     * @param $http Used to retrieve data for articles.
     * @param $cordovaInAppBrowser Used for opening articles in application.
     * @description This is the function for the NavigationController.
     */
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
    /**
     * @function RecentTabController
     * @requires $scope
     * @requires $http
     * @requires $cordovaInAppBrowser
     * @param $scope The scope of the controller.
     * @param $http Used to retrieve data for articles.
     * @param $cordovaInAppBrowser Used for opening articles in application.
     * @description This is the controller for the recent tab of the feed view.
     */
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
    /**
     * @function QuizzesTabController
     * @requires $scope
     * @requires $http
     * @requires $cordovaInAppBrowser
     * @requires $mdSidenav
     * @param $scope The scope of the controller.
     * @param $http Used to retrieve data for articles.
     * @param $cordovaInAppBrowser Used for opening articles in application.
     * @param $mdSidenav This opens up the side navigation bar.
     * @description This is the controller for the quizzes view.
     */
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
            $scope.quizzes = response.data;
        });
    }]).
    /**
     * @function JournalsTabController
     * @requires $scope
     * @requires $http
     * @requires $cordovaInAppBrowser
     * @requires $mdSidenav
     * @param $scope The scope of the controller.
     * @param $http Used to retrieve data for articles.
     * @param $cordovaInAppBrowser Used for opening articles in application.
     * @param $mdSidenav This opens up the side navigation bar.
     * @description This is the controller for the journals view.
     */
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