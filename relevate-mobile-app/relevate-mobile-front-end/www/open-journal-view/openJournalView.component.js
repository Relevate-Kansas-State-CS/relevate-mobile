/**
 * @function component
 * @memberof module:openJournalView
 * @description This creates the component for an open journal view based off an html template and the OpenJournalController.
 */
angular.
    module('openJournalView').
    component('openJournalView', {
        templateUrl: 'open-journal-view/openJournalView.template.html',
        controller: 'OpenJournalController'
    });