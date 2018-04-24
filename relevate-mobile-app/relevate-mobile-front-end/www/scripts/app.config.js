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
                state('account', {
                    url: '/account',
                    template: '<account-view></account-view><div ui-view></div>'
                }).
                state('account.create', {
                    url: '/create',
                    template: '<create-view></create-view>'
                }).
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
                state('submit', {
                    url: '/submit',
                    template: '<submit-view></submit-view><div ui-view></div>'
                }).
                state('submit.submitQuiz', {
                    url: '/submitQuiz',
                    template: '<submit-quiz-view></submit-quiz-view><div ui-view></div>'
                }).
                state('submit.submitArticle', {
                    url: '/submitArticle',
                    template: '<submit-article-view></submit-article-view><div ui-view></div>'
                }).
                state('submit.userSubmissions', {
                    url: '/userSubmissions',
                    template: '<user-submissions-view></user-submissions-view><div ui-view></div>'
                }).
                state('following', {
                    url: '/following',
                    template: '<following-view></following-view><div ui-view></div>'
                }).
                state('quiz', {
                    url: '/quiz',
                    template: '<quiz-view></quiz-view><div ui-view></div>'
                }).
                state('quiz.quizzes-home', {
                    url: '/quizzes-home',
                    data: {
                        'selectedItem': 'home'
                    },
                    template: '<quizzes-home-view></quizzes-home-view>'
                }).
                state('quiz.quizzes-trending', {
                    url: '/quizzes-trending',
                    data: {
                        'selectedItem': 'trending'
                    },
                    template: '<quizzes-trending-view></quizzes-trending-view>'
                }).
                state('quiz.quizzes-completed', {
                    url: '/quizzes-completed',
                    data: {
                        'selectedItem': 'completed'
                    },
                    template: '<quizzes-completed-view></quizzes-completed-view>'
                }).
                state('quiz-open', {
                    url: '/quiz-open',
                    template: '<quiz-open-view></quiz-open-view><div ui-view></div>'
                }).
                state('quiz-open.open-quiz', {
                    url: '/open-quiz',
                    template: '<open-quiz-view></open-quiz-view>',
                    params: { quiz: null, index: null, count: null, answers: null }
                }).
                state('quiz-open.finished-quiz', {
                    url: '/finished-quiz',
                    template: '<finished-quiz-view></finished-quiz-view>',
                    params: { quiz: null, answers: null }
                }).
                state('journals', {
                    url: '/journals',
                    template: '<journals-view></journals-view><div ui-view></div>'
                }).
                state('journals.journals-home', {
                    url: '/journals-home',
                    data: {
                        'selectedItem': 'home'
                    },
                    template: '<journals-home-view></journals-home-view>'
                }).
                state('journals.journals-trending', {
                    url: '/journals-trending',
                    data: {
                        'selectedItem': 'trending'
                    },
                    template: '<journals-trending-view></journals-trending-view>'
                }).
                state('journals.journals-completed', {
                    url: '/journals-completed',
                    data: {
                        'selectedItem': 'completed'
                    },
                    template: '<journals-completed-view></journals-completed-view>'
                }).
                state('journal-open', {
                    url: '/journal-open',
                    template: '<journal-open-view></journal-open-view><div ui-view></div>'
                }).
                state('journal-open.open-journal', {
                    url: '/open-journal',
                    template: '<open-journal-view></open-journal-view>',
                    params: { journal: null }
                });
            $urlRouterProvider.otherwise('/account/create');
        }
    ]);