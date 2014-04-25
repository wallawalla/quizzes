/*global Swiper*/

'use strict';

angular
    .module('quizzesApp')
    .controller('ThemesCtrl', function ($scope, $http) {
        $scope.swiperInstantiated = false;

        $http.get('data/themes.json').success(function (data) {
            $scope.themes = data;
            setTimeout(function () {
                $scope.initSwiper();
            }, 100);
        });

        $scope.initSwiper = function () {
            if(!$scope.swiperInstantiated) {
                $scope.swiperInstantiated = true;
                $scope.swiper = new Swiper('#themes-swiper', {
                    mode:'horizontal',
                    loop:true,
                    keyboardControl:true
                });
            }
        };
    });