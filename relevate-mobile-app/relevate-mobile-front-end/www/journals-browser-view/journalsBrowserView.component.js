/**
 * @function component
 * @memberof module:journalsBrowserView
 * @description This creates the component for the journals browser view based off an html template and the JournalsBrowserController.
 */
angular.
    module('journalsBrowserView').
    component('journalsBrowserView', {
        templateUrl: 'journals-browser-view/journalsBrowserView.template.html',
        controller: 'JournalsBrowserController'
    });