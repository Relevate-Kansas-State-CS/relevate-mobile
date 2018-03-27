angular.
  module('mainApp').
    config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider',
      /**
       * @function config
       * @memberof module:mainApp
       * @param $stateProvider State of the application.
       * @param $urlRouterProvider Routing provider of the application.
       * @param $mdThemingProvider Theming provider of the application.
       * @description The function to configure the routes.
       */
        function config($stateProvider, $urlRouterProvider, $mdThemingProvider) {
            var relevateBlue = $mdThemingProvider.extendPalette('indigo', {
                '500': '#246FF2'
            });

            // Register the new color palette map with the name <code>neonRed</code>
            $mdThemingProvider.definePalette('relevateBlue', relevateBlue);

            // Use that theme for the primary intentions
            $mdThemingProvider.theme('default')
                .primaryPalette('relevateBlue');
          $stateProvider.
              state('feed', {
                  url: '/feed',
                  template: '<feed-view></feed-view><div ui-view></div>'
              }).
              state('feed.home', {
                  url: '/home',
                  data: {
                      'selectedItem': 'home'
                  },
                  template: '<home-view></home-view>'
              }).
              state('feed.trending', {
                  url: '/trending',
                  data: {
                      'selectedItem': 'trending'
                  },
                  template: '<trending-view></trending-view>'
              }).
              state('feed.recent', {
                  url: '/recent',
                  data: {
                      'selectedItem': 'recent'
                  },
                  template: '<recent-view></recent-view>'
              }).
              state('following', {
                  url: '/following',
                  template: '<following-view></following-view><div ui-view></div>'
              }).
              state('quiz', {
                  url: '/quiz',
                  template: '<quiz-view></quiz-view><div ui-view></div>'
              }).
              state('quiz.quizzes', {
                  url: '/quizzes',
                  template: '<quizzes-view></quizzes-view>'
              }).
              state('quiz.open-quiz', {
                  url: '/open-quiz',
                  template: '<open-quiz-view></open-quiz-view>',
                  params: { quiz: null, index: null, count: null, answers: null }
              }).
              state('quiz.finished-quiz', {
                  url: '/finished-quiz',
                  template: '<finished-quiz-view></finished-quiz-view>',
                  params: { quiz: null, answers: null }
              }).
              state('journalsBrowserView', {
                  url: '/journalsBrowserView',
                  template: '<journals-browser-view></journals-browser-view><div ui-view></div>'
              }).
              state('openJournalView', {
                  url: '/openJournalView',
                  template: '<open-journal-view></open-journal-view><div ui-view></div>'
              }).
              state('accountView', {
                  url: '/accountView',
                  template: '<account-view></account-view><div ui-view></div>'
              });
          $urlRouterProvider.otherwise('/feed/home');
      }
  ]);