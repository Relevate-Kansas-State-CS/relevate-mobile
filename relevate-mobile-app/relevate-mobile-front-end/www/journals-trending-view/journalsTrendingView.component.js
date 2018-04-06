/**
 * @function component
 * @memberof module:journalsHomeView
 * @description This creates the component for the journals browser view based off an html template and the JournalsBrowserController.
 */
angular.
    module('journalsTrendingView').
    component('journalsTrendingView', {
        templateUrl: 'journals-trending-view/journalsTrendingView.template.html',
        controller: 'JournalsTrendingController'
    });