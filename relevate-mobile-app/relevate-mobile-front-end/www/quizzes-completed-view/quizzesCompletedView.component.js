/**
 * @function component
 * @memberof module:quizzesView
 * @description This creates the component for a quizzes view based off an html template and the QuizzesTabController.
 */
angular.
    module('quizzesCompletedView').
    component('quizzesCompletedView', {
        templateUrl: 'quizzes-completed-view/quizzesCompletedView.template.html',
        controller: 'QuizzesCompletedController'
    });