/**
 * @function component
 * @memberof module:feedView
 * @description This creates the component for a feed view based off an html template and the FeedController.
 */
angular.
    module('feedView').
    component('feedView', {
        templateUrl: 'feed-view/feedView.template.html',
        controller: 'FeedController'
    });