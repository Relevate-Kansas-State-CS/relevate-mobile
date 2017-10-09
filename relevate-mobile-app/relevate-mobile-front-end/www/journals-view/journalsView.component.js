/*  
    This component controls basic aspects of the "Journals" tab in the "Activities" section.
    
    Of particular importance is: $http.get('data/journals_art.json') .... Which specifies a .json file (located in the data folder) that contains data about what the Journals tab should display.
*/

angular.
    module('journalsView').
    component('journalsView', {
        templateUrl: 'journals-view/journalsView.template.html',
        controller: 'JournalsTabController'
    });