describe('NavigationController', function () {
    var NavController;
    var scope;
    var http;
    var cordovaInAppBrowser;
    var httpBackend;

    beforeEach(angular.mock.module('ngMaterial'));
    beforeEach(angular.mock.module('ngAria'));
    beforeEach(angular.mock.module('ngAnimate'));
    beforeEach(angular.mock.module('ngMessages'));
    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('btford.socket-io'));
    beforeEach(angular.mock.module('ngStorage'));
    beforeEach(angular.mock.module('ngMdIcons'));
    beforeEach(angular.mock.module('ngCordova'));
    beforeEach(angular.mock.module('homeView'));
    beforeEach(angular.mock.module('trendingView'));
    beforeEach(angular.mock.module('recentView'));
    beforeEach(angular.mock.module('mainApp'));

    // Inject the $controller service to create instances of the controller (UsersController) we want to test
    beforeEach(inject(function ($controller, $rootScope, $http, $cordovaInAppBrowser, $httpBackend) {
        scope = $rootScope.$new();
        http = $http;
        cordovaInAppBrowser = $cordovaInAppBrowser;
        httpBackend = $httpBackend;
        NavController = $controller('NavigationController', {
            $scope: scope,
            $http: http,
            $cordovaInAppBrowser: cordovaInAppBrowser
        });
    }));

    // Verify our controller exists
    it('Controller defined', function () {
        expect(NavController).toBeDefined();
    });
});