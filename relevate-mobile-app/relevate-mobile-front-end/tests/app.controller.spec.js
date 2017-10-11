describe('Controller Checks', function () {
    var controller;
    var scope;
    /*var http;
    var cordovaInAppBrowser;
    var httpBackend;*/

    beforeEach(angular.mock.module('ngMaterial'));
    beforeEach(angular.mock.module('ngAria'));
    beforeEach(angular.mock.module('ngAnimate'));
    beforeEach(angular.mock.module('ngMessages'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('btford.socket-io'));
    beforeEach(angular.mock.module('ngStorage'));
    beforeEach(angular.mock.module('ngMdIcons'));
    beforeEach(angular.mock.module('ngCordova'));
    beforeEach(angular.mock.module('homeView'));
    beforeEach(angular.mock.module('trendingView'));
    beforeEach(angular.mock.module('recentView'));
    beforeEach(angular.mock.module('feedView'));
    beforeEach(angular.mock.module('journalsView'));
    beforeEach(angular.mock.module('quizzesView'));
    beforeEach(angular.mock.module('mainApp'));
    
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

    it('NavigationController Defined', inject(function ($controller, $rootScope, $mdSidenav) {
        scope = $rootScope.$new();
        var mdSidenav = $mdSidenav;
        controller = $controller('NavigationController', {
            $scope: scope,
            $mdSideNav: mdSidenav
        });
        expect(controller).toBeDefined();
    }));

    it('SideNavController Defined', inject(function ($controller, $rootScope, $mdSidenav) {
        scope = $rootScope.$new();
        var mdSidenav = $mdSidenav;
        controller = $controller('SideNavController', {
            $scope: scope,
            $mdSideNav: mdSidenav
        });
        expect(controller).toBeDefined();
    }));

    it('FeedController Defined', inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('FeedController', {
            $scope: scope
        });
        expect(controller).toBeDefined();
    }));

    it('HomeTabController Defined', inject(function ($controller, $rootScope, $http, $cordovaInAppBrowser) {
        scope = $rootScope.$new();
        var http = $http;
        var cordovaInAppBrowser = $cordovaInAppBrowser;
        controller = $controller('HomeTabController', {
            $scope: scope,
            $http: http,
            $cordovaInAppBrowser: cordovaInAppBrowser
        });
        expect(controller).toBeDefined();
    }));

    it('TrendingTabController Defined', inject(function ($controller, $rootScope, $http, $cordovaInAppBrowser) {
        scope = $rootScope.$new();
        var http = $http;
        var cordovaInAppBrowser = $cordovaInAppBrowser;
        controller = $controller('TrendingTabController', {
            $scope: scope,
            $http: http,
            $cordovaInAppBrowser: cordovaInAppBrowser
        });
        expect(controller).toBeDefined();
    }));

    it('RecentTabController Defined', inject(function ($controller, $rootScope, $http, $cordovaInAppBrowser) {
        scope = $rootScope.$new();
        var http = $http;
        var cordovaInAppBrowser = $cordovaInAppBrowser;
        controller = $controller('RecentTabController', {
            $scope: scope,
            $http: http,
            $cordovaInAppBrowser: cordovaInAppBrowser
        });
        expect(controller).toBeDefined();
    }));

    it('QuizzesTabController Defined', inject(function ($controller, $rootScope, $http, $cordovaInAppBrowser) {
        scope = $rootScope.$new();
        var http = $http;
        var cordovaInAppBrowser = $cordovaInAppBrowser;
        controller = $controller('QuizzesTabController', {
            $scope: scope,
            $http: http,
            $cordovaInAppBrowser: cordovaInAppBrowser
        });
        expect(controller).toBeDefined();
    }));
});