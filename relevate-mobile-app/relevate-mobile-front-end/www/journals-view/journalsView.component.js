/**
 * @function component
 * @memberof module:quizzesView
 * @description This creates the component for a quizzes view based off an html template and the QuizzesTabController.
 */
angular.
    module('journalsView').
    component('journalsView', {
        templateUrl: 'journals-view/journalsView.template.html',
        controller: 'JournalsController'
    });