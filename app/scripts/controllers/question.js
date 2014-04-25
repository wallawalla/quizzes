'use strict';

angular
    .module('quizzesApp')
    .controller('QuestionCtrl', function ($scope, $http, $routeParams) {
        $http.get('data/' + $routeParams.theme + '/' + $routeParams.id + '.json').success(function (data) {
            $scope.questions = data;
        });

        $scope.validate = function () {
            console.log($scope.response);
        }
    });