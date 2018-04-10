/**
 * @function component
 * @memberof module:quizzesView
 * @description This creates the component for a quizzes view based off an html template and the QuizzesTabController.
 */
angular.
    module('quizOpenView').
    component('quizOpenView', {
        templateUrl: 'quiz-open-view/quizOpenView.template.html',
        controller: 'QuizOpenController'
    });