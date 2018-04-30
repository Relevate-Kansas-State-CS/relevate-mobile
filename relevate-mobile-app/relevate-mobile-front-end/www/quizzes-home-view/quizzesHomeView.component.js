/**
 * @function component
 * @memberof module:quizzesView
 * @description This creates the component for a quizzes view based off an html template and the QuizzesTabController.
 */
angular.
    module('quizzesHomeView').
    component('quizzesHomeView', {
        templateUrl: 'quizzes-home-view/quizzesHomeView.template.html',
        controller: 'QuizzesHomeController'
    });