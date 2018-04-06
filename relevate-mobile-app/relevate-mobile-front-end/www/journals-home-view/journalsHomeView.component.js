/**
 * @function component
 * @memberof module:journalsHomeView
 * @description This creates the component for the journals browser view based off an html template and the JournalsBrowserController.
 */
angular.
    module('journalsHomeView').
    component('journalsHomeView', {
        templateUrl: 'journals-home-view/journalsHomeView.template.html',
        controller: 'JournalsHomeController'
    });