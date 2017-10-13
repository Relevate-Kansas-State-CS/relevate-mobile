/**
 * @function component
 * @memberof module:trendingView
 * @description This creates the component for a trending view based off an html template and the TrendingTabController.
 */
angular.
    module('trendingView').
    component('trendingView', {
        templateUrl: 'trending-view/trendingView.template.html',
        controller: 'TrendingTabController'
    });