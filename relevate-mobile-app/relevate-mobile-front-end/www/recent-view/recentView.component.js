/*  
    This component controls basic aspects of the "Recent" tab in the mobile application.
    
    Of particular importance is: $http.get('data/recent_art.json') .... Which specifies a .json file (located in the data folder) that contains data about what the Recent tab should display,
    such as the article title and image, an article description, the external URL it links to, and its associated tags.
*/

angular.
    module('recentView').
    component('recentView', {
        templateUrl: 'recent-view/recentView.template.html',
        controller: 'RecentTabController'
    });