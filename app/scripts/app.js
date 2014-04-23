'use strict';

angular
    .module('quizzesApp', ['ngCookies','ngResource','ngSanitize','ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'views/main.html',controller: 'MainCtrl'})
            .otherwise({redirectTo: '/'})
            .when('/themes', {templateUrl: 'views/themes.html',controller: 'ThemesCtrl'})
            .otherwise({redirectTo: '/'})
            .when('/theme/:id', {templateUrl: 'views/quizzes.html',controller: 'QuizzesCtrl'})
            .otherwise({redirectTo: '/'});
    });