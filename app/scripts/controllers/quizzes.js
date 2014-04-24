/*global $*/

'use strict';

angular
    .module('quizzesApp')
    .controller('QuizzesCtrl', function ($scope, $http, $routeParams) {
        $scope.theme = $routeParams.id;

        $http.get('data/' + $scope.theme + '/quizzes.json').success(function (data) {
            $scope.quizzes = data;
            setTimeout(function () {
                $scope.initIsotope();
            }, 200);
        });

        $scope.initIsotope = function () {
            $('#valTheme').attr('ng-init', 'search=' + $scope.theme);
            $('.quizzes').isotope({
                itemSelector: '.item-isotope',
                layoutMode: 'fitRows'
            });
        };
    });