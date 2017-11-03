/**
 * @function component
 * @memberof module:openQuizView
 * @description This creates the component for an open-quiz view based off an html template and the OpenQuizController.
 */
angular.
    module('openQuizView').
    component('openQuizView', {
        templateUrl: 'open-quiz-view/openQuizView.template.html',
        controller: 'OpenQuizController'
    });