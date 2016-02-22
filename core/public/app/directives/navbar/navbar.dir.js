angular.module('app')
    .directive('dirNavBar', function () {
        return {
            restrict: 'AE',
            templateUrl: './app/directives/navbar/navbar.dir.html'
        };
    });