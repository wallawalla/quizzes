/*global $*/

'use strict';

angular
    .module('quizzesApp')
    .controller('NavCtrl', function ($scope, $http) {
        $http.get('data/menu.json').success(function (data) {
            $scope.sections = data.en;
        });

        $('#nav').on('click', 'a', function (evt) {
            evt.preventDefault();

            $('body').fadeOut(function () {
                window.location.href = $(evt.target).parent().attr('href');
                $(this).fadeIn();
            });
        });
    });