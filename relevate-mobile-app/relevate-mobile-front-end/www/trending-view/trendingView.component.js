﻿/*  
    This component controls basic aspects of the "Trending" tab in the mobile application.
    
    Of particular importance is: $http.get('data/trending_art.json') .... Which specifies a .json file (located in the data folder) that contains data about what the Trending tab should display,
    such as the article title and image, an article description, the external URL it links to, and its associated tags.
*/

angular.
    module('trendingView').
    component('trendingView', {
        templateUrl: 'trending-view/trendingView.template.html',
        controller: 'TrendingTabController'
    });