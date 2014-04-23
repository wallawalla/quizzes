'use strict';

angular
    .module('quizzesApp')
    .controller('NavCtrl', function ($scope, $http) {
        $http.get('data/menu.json').success(function (data) {
            $scope.sections = data.en;
        });
    });