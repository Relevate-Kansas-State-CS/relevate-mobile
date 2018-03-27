/**
 * @module mainApp
 * @requires ngMaterial
 * @requires ngAria
 * @requires ngMessages
 * @requires ui.router
 * @requires btford.socket_io
 * @requires ngStorage
 * @requires ngMdIcons
 * @requires ngCordova
 * @requires homeView
 * @requires trendingView
 * @requires recentView
 * @requires followingView
 * @requires quizzesView
 * @requires openQuizView
 * @requires openJournalView
 * @requires feedView
 * @requires quizView
 * @requires finishedQuizView
 * @requires journalsBrowserView
 * @description This is the main module for the application.
 */
angular.module('mainApp', [
    'ngMaterial',
    'ngAria',
    'ngAnimate',
    'ngMessages',
    'ui.router',
    'btford.socket-io',
    'ngStorage',
    'ngMdIcons',
    'ngCordova',
    'akoenig.deckgrid',
    'homeView',
    'trendingView',
    'recentView',
    'followingView',
    'quizzesView',
    'openQuizView',
    'openJournalView',
    'feedView',
    'quizView',
    'finishedQuizView',
    'journalsBrowserView',
    'accountView',
    'createView'
]);