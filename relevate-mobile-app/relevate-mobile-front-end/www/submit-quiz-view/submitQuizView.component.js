/**
 * @function component
 * @memberof module:submitQuizView
 * @description This creates the component for a submit quiz view based off an html template and the SubmitQuizTabController.
 */
angular.
    module('submitQuizView').
    component('submitQuizView', {
        templateUrl: 'submit-quiz-view/submitQuizView.template.html',
        controller: 'SubmitQuizTabController'
    });