/**
 * @function component
 * @memberof module:journalsView
 * @description This creates the component for a journals view based off an html template and the JournalsTabController.
 */
angular.
    module('journalsView').
    component('journalsView', {
        templateUrl: 'journals-view/journalsView.template.html',
        controller: 'JournalsTabController'
    });