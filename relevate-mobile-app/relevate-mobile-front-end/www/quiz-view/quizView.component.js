/**
 * @function component
 * @memberof module:quizzesView
 * @description This creates the component for a quizzes view based off an html template and the QuizzesTabController.
 */
angular.
    module('quizView').
    component('quizView', {
        templateUrl: 'quiz-view/quizView.template.html',
        controller: 'QuizTabController'
    });