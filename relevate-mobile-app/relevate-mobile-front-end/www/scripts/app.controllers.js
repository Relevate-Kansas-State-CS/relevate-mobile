angular.module('mainApp').
    controller('NavigationController', ['$scope', function ($scope) {
        $scope.currentNavItem = 'home';
        $scope.onSwipeRight = function (ev) {
            alert('You swiped right!!');
        };
    }]);