
app.controller('resourcesCtrl', function ($scope, resourceService) {

    $scope.test = 'resourcesCtrl connected'
    
    $scope.getResources = function () {
        resourceService.getResources().then(function(response) {
            $scope.resources = response.data;
        })
    }
    
    $scope.getResources();
});