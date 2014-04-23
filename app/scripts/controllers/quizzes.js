'use strict';

angular
    .module('quizzesApp')
    .controller('QuizzesCtrl', function ($scope, $http, $routeParams) {
        $http.get('data/quizzes.json').success(function (data) {
            $scope.quizzes = data;
            setTimeout(function () {
                $scope.initIsotope();
            });
        });

        $scope.theme = $routeParams.id;

        $scope.initIsotope = function () {
            $('.quizzes').isotope({
                itemSelector: '.item-isotope',
                layoutMode: 'fitRows'
            });
        }
    });