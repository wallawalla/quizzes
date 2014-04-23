'use strict';

angular
    .module('quizzesApp')
    .controller('ThemesCtrl', function ($scope, $http) {
        $scope.swiper = new Swiper('#themes-swiper', {
            mode:'horizontal',
            loop:true,
            slidesPerView:'auto'
        });

        $http.get('data/themes.json').success(function (data) {
            $scope.themes = data;
            $scope.swiper.reInit();
        });
    });