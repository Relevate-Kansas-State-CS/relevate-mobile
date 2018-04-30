/**
 * @function component
 * @memberof module:userSubmissionsView
 * @description This creates the component for a ser submissions view based off an html template and the UserSubmissionsTabController.
 */
angular.
    module('userSubmissionsView').
    component('userSubmissionsView', {
        templateUrl: 'user-submissions-view/userSubmissionsView.template.html',
        controller: 'UserSubmissionsTabController'
    });