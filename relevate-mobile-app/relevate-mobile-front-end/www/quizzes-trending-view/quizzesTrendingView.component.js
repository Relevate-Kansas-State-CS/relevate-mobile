/**
 * @function component
 * @memberof module:quizzesView
 * @description This creates the component for a quizzes view based off an html template and the QuizzesTabController.
 */
angular.
    module('quizzesTrendingView').
    component('quizzesTrendingView', {
        templateUrl: 'quizzes-trending-view/quizzesTrendingView.template.html',
        controller: 'QuizzesTrendingController'
    });