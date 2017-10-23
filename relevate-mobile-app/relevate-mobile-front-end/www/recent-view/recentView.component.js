/**
 * @function component
 * @memberof module:recentView
 * @description This creates the component for a recent view based off an html template and the RecentTabController.
 */
angular.
    module('recentView').
    component('recentView', {
        templateUrl: 'recent-view/recentView.template.html',
        controller: 'RecentTabController'
    });