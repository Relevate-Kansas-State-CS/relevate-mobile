/**
 * @function component
 * @memberof module:homeView
 * @description This creates the component for a home view based off an html template and the HomeTabController.
 */
angular.
  module('homeView').
  component('homeView', {
      templateUrl: 'home-view/homeView.template.html',
      controller: 'HomeTabController'
  });