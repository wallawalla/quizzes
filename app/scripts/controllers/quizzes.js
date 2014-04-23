'use strict';

angular
    .module('quizzesApp')
    .controller('QuizzesCtrl', function ($scope, $http, $routeParams) {
        $http.get('data/quizzes.json').success(function (data) {
            $scope.quizzes = data;
        });
        $scope.theme = $routeParams.id;
    });