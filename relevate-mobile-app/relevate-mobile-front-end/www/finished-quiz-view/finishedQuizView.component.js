/**
 * @function component
 * @memberof module:feedView
 * @description This creates the component for a feed view based off an html template and the FeedController.
 */
angular.
    module('finishedQuizView').
    component('finishedQuizView', {
        templateUrl: 'finished-quiz-view/finishedQuizView.template.html',
        controller: 'FinishedQuizController'
    });