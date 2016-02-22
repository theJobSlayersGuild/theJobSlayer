var app = angular.module('app');

app.directive('dirNavBar',  function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/navbar/navbar.dir.html'
    };
});