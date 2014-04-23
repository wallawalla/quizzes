'use strict';

angular
    .module('quizzesApp')
    .controller('ThemesCtrl', function ($scope, $http) {
        $http.get('data/themes.json').success(function (data) {
            $scope.themes = data;
            setTimeout(function () {
                $scope.initSwiper();
            }, 200);
        });

        $scope.initSwiper = function () {
            if(!$scope.swiper) {
                $scope.swiper = new Swiper('#themes-swiper', {
                    mode:'horizontal',
                    loop:true,
                    slidesPerView:'auto',
                    tdFlow: {
                        rotate:0,
                        stretch:0,
                        depth:100,
                        modifier:1,
                        shadows:true
                    }
                });
            }
        }
    });