﻿/**
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
            if (path.name === 'feed' || path.name === 'feed.home' || path.name === 'feed.trending' || path.name === 'feed.recent') {
                $scope.currentNavItem = path.data.selectedItem;
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
        $scope.randomColor = function () {
            var color = Math.floor(Math.random() * 4);
            switch (color) {
                case 0:
                    return 'red';
                case 1:
                    return 'light-blue';
                case 2:
                    return 'purple';
                case 3:
                    return 'orange';
            }
        }
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
     * @description This is the function for the trending tab of the feed view.
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
     * @function FollowingTabController
     * @requires $scope
     * @requires $http
     * @requires $cordovaInAppBrowser
     * @requires $mdSidenav
     * @param $scope The scope of the controller.
     * @param $http Used to retrieve data for articles.
     * @param $cordovaInAppBrowser Used for opening articles in application.
     * @param $mdSidenav This opens up the side navigation bar.
     * @description This is the controller for the following view.
     */
    controller('FollowingTabController', ['$scope', '$http', '$cordovaInAppBrowser', '$mdSidenav', function ($scope, $http, $cordovaInAppBrowser, $mdSidenav) {
        $scope.openSideNav = function () {
            $mdSidenav('left').open();
        };
        var options = {
            location: 'yes',
            clearcache: 'yes',
            toolbar: 'no'
        };
        $http.get('data/following_art.json').then(function (response) {
            $scope.following = response.data;
        });
    }]).
    controller('QuizTabController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.openSideNav = function () {
            $mdSidenav('left').open();
        }
    }]).
    /**
     * @function QuizzesTabController
     * @requires $scope
     * @requires $http
     * @requires $state
     * @param $scope The scope of the controller.
     * @param $http Used to retrieve data for quizzes.
     * @param $state Used to route the app to the open quiz view when the "view quiz"button is tapped.
     * @description This is the controller for the quizzes view.
     */
    controller('QuizzesTabController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
        $scope.OpenQuiz = function (quizObject) {
            $state.go('quiz.open-quiz', { quiz: quizObject, index: 0, count: quizObject.questions.length });
        }
        $http.get('data/quizzes_art.json').then(function (response) {
            $scope.quizzes = response.data;
        });
    }]).
    /**
     * @function OpenQuizController
     * @requires $scope
     * @requires $mdSidenav
     * @requires $stateParams
     * @requires $state
     * @param $scope The scope of the controller.
     * @param $mdSidenav This opens up the side navigation bar.
     * @param $stateParams Used to help track relevant quiz data such as question responses and indices
     * @param $state Used to route the app to the appropriate view when a question navigation button is pressed.
     * @description This is the controller for the open-quiz sub-view that's displayed when a user selects/opens an available quiz from the main quiz view.
     */
    controller('OpenQuizController', ['$scope', '$mdSidenav', '$stateParams', '$state', function ($scope, $mdSidenav, $stateParams, $state) {
        $scope.openSideNav = function () {
            $mdSidenav('left').open();
        }
        $scope.count = $stateParams.count; //parameter from previous question or QuizzesTab
        $scope.index = $stateParams.index; // ""                    ""
        $scope.quiz = $stateParams.quiz; //     ""              ""
        $scope.choice = ($stateParams.answers != null && $stateParams.answers[$scope.index] != null) ? $stateParams.answers[$scope.index] : null;
        $scope.previousQuestion = function () {
            if ($stateParams.answers == null) $stateParams.answers = Array($scope.count);
            $stateParams.answers[$scope.index] = $scope.choice;
            $scope.index--;
            $state.go('quiz.open-quiz', { quiz: $scope.quiz, index: $scope.index, count: $scope.count, answers: $stateParams.answers }); //unsure about answers object
        }
        $scope.nextQuestion = function () {
            if ($stateParams.answers == null) $stateParams.answers = Array($scope.count);
            $stateParams.answers[$scope.index] = $scope.choice;
            $scope.index++; //May be used to track the current state of the quiz. When the index == the total question count, we can route to a "quiz finished" ending screen, otherwise, load the next question and increment the index.
            if ($scope.index === $scope.count) {
                $state.go('quiz.finished-quiz', { quiz: $scope.quiz, answers: $stateParams.answers }); //unsure about answers object, can be used to store user responses so they can be used elsewhere in the future
            } else {
                $state.go('quiz.open-quiz', { quiz: $scope.quiz, index: $scope.index, count: $scope.count, answers: $stateParams.answers }); //unsure about answers object
            }
        };
    }]).
    /**
     * @function FinishedQuizController
     * @requires $scope
     * @requires $mdSidenav
     * @requires $stateParams
     * @requires $http
     * @param $scope The scope of the controller.
     * @param $mdSidenav This opens up the side navigation bar.
     * @param $stateParams Used to store users' quiz responses.
     * @param $http Used to exchange quiz response data with the backend server.
     * @description This is the controller for the view which is displayed at the end of a quiz.
     */
    controller('FinishedQuizController', ['$scope', '$mdSidenav', '$stateParams', '$http', function ($scope, $mdSidenav, $stateParams, $http) {
        console.log($stateParams.answers);
        //$http.post(url, JSON.stringify($stateParams.answers));
    }]).
    /**
     * @function JournalSelectionController
     * @requires $scope
     * @requires $http
     * @requires $state
     * @param $scope The scope of the controller.
     * @param $http Used to retrieve data for journal prompts.
     * @param $state Used to route the app to the journal selection view when the "view journal "button is activated.
     * @description This is the controller for the journal selection view.
     */
    controller('JournalSelectionController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
        $scope.OpenJournal = function (journalObject) {
            $state.go('journal.open-journal', { journal: journalObject }); //NOTE: This is being adapted from the QuizzesTabController. TODO: Double check for syntax and attach proper routing, etc.
        }
        $http.get('data/journals.json').then(function (response) {
            $scope.journals = response.data;
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