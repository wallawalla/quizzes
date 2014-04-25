'use strict';

var app = angular.module('quizzesApp', ['ngCookies','ngResource','ngSanitize','ngRoute']);

app.config(function ($routeProvider) {
    // routes definitions
    $routeProvider
        .when('/', {templateUrl: 'views/main.html'})
        .otherwise({redirectTo: '/'})
        .when('/themes', {templateUrl: 'views/themes.html'})
        .otherwise({redirectTo: '/'})
        .when('/theme/:id', {templateUrl: 'views/quizzes.html'})
        .otherwise({redirectTo: '/'})
        .when('/quizz/:theme/:id', {templateUrl: 'views/question.html'})
        .otherwise({redirectTo: '/'});
});