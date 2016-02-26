angular.module("app").controller("editResourceCtrl", function($scope, resourceService, close) {
    $scope.close = close;

    $scope.editResource = function (resource) {
        resourceService.editResource(resource).then(function (response) {
            alert('Resource updated successfully!');
        })
    }
})