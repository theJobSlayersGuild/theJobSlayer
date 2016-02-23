
app.controller('splashCtrl', function ($scope, jobListService) {

    $scope.test = 'splashCtrl connected'

    $scope.submitLogin = function(hero) {
        jobListService.submitHero(hero)
    }

});