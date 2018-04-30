/**
 * @function component
 * @memberof module:journalsHomeView
 * @description This creates the component for the journals browser view based off an html template and the JournalsBrowserController.
 */
angular.
    module('journalsCompletedView').
    component('journalsCompletedView', {
        templateUrl: 'journals-completed-view/journalsCompletedView.template.html',
        controller: 'JournalsCompletedController'
    });