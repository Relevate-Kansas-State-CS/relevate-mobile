/**
 * @function component
 * @memberof module:submitView
 * @description This creates the component for a submit view based off an html template and the SubmitTabController.
 */
angular.
    module('submitView').
    component('submitView', {
        templateUrl: 'submit-view/submitView.template.html',
        controller: 'SubmitTabController'
    });