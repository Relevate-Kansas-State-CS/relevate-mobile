/**
 * @function component
 * @memberof module:createView
 * @description This creates the component for an account create view based off an html template and the FeedController.
 */
angular.
    module('createView').
    component('createView', {
        templateUrl: 'create-view/createView.template.html',
        controller: 'CreateController'
    });