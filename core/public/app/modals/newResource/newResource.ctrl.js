angular.module('app').controller('newResourceCtrl', function ($scope, close, resourceService, hero) {
    $scope.close = close;
    
    $scope.hero = hero;
    
    $scope.createResource = function (resource) {
        $scope.resource._author = $scope.hero._id;
        resourceService.createResource(resource).then(function (response) {
            console.log(response.data);
            $scope.close();
        })
    }
});