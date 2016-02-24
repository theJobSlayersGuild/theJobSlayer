angular.module('app').controller('newResourceCtrl', function ($scope, close, resourceService) {
    $scope.close = close;
    
    $scope.createResource = function (resource) {
        console.log(resource);
        resourceService.createResource(resource).then(function (response) {
            console.log(response.data);
            $scope.close();
        })
    }
})