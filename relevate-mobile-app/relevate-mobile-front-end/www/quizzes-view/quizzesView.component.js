/**
 * @function component
 * @memberof module:quizzesView
 * @description This creates the component for a quizzes view based off an html template and the QuizzesTabController.
 */
angular.
    module('quizzesView').
    component('quizzesView', {
        templateUrl: 'quizzes-view/quizzesView.template.html',
        controller: 'QuizzesTabController'
    });