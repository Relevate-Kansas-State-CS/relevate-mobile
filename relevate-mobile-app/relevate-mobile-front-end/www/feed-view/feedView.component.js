angular.
    module('feedView').
    value('$routerRootComponent', 'feedView').
    component('feedView', {
        templateUrl: 'feed-view/feedView.template.html',
        controller: 'FeedController'
    });