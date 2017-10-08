angular.
    module('feedView').
    value('$routerRootComponent', 'feedView').
    component('feedView', {
        templateUrl: 'feed-view/feedView.template.html',
        controller: 'NavigationController',
        $routeConfig: [
            { path: '/home', name: 'Home', component: 'homeView', useAsDefault: true },
            { path: '/trending', name: 'Trending', component: 'trendingView' },
            { path: '/recent', name: 'Recent', component: 'recentView' }
        ]
    });