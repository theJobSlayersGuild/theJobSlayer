angular.module("app").controller("editResourceModal", function($scope, resourceService, close, hero, resource) {
    $scope.close = close;
    $scope.hero = hero;
    $scope.resource = resource;
    
    $scope.editResource = function (resource, hero) {
        console.log('edit fired')
        resourceService.editResource({_id : resource._id, _author: hero._id}).then(function (response) {
            alert('Resource updated successfully!');
        })
    }
})