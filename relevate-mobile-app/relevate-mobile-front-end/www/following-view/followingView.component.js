/**
 * @function component
 * @memberof module:followingView
 * @description This creates the component for the following view based off an html template and the FollowingTabController.
 */
angular.
  module('followingView').
  component('followingView', {
      templateUrl: 'following-view/followingView.template.html',
      controller: 'FollowingTabController'
  });