/*  
    This component controls basic aspects of the "Quizzes" tab in the "Activities" section.
    
    Of particular importance is: $http.get('data/quizzes_art.json') .... Which specifies a .json file (located in the data folder) that contains data about what the Quizzes tab should display.
*/

angular.
    module('quizzesView').
    component('quizzesView', {
        templateUrl: 'quizzes-view/quizzesView.template.html',
        controller: 'QuizzesTabController'
    });