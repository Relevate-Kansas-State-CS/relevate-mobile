/**
 * @function component
 * @memberof module:accountView
 * @description This creates the component for the account view  based off an html template and the accountViewController.
 */
angular.
    module('accountView').
    component('accountView', {
        templateUrl: 'account-view/accountView.template.html',
        controller: 'AccountViewController'
    });