/**
 * @function component
 * @memberof module:submitArticleView
 * @description This creates the component for a submit article view based off an html template and the SubmitArticleTabController.
 */
angular.
    module('submitArticleView').
    component('submitArticleView', {
        templateUrl: 'submit-article-view/submitArticleView.template.html',
        controller: 'SubmitArticleTabController'
    });