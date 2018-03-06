/**
 * @function component
 * @memberof module:journalSelectionView
 * @description This creates the component for the journal selection view based off an html template and the JournalSelectionController.
 */
angular.
    module('journalSelectionView').
    component('journalSelectionView', {
        templateUrl: 'journal-selection-view/journalSelectionView.template.html',
        controller: 'JournalSelectionController'
    });