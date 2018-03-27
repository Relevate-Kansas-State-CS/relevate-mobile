/**
 * @function component
 * @memberof module:accountView
 * @description This creates the component for an account view based off an html template and the AccountController.
 */
angular.
    module('accountView').
    component('accountView', {
        templateUrl: 'account-view/accountView.template.html',
        controller: 'AccountController'
    });