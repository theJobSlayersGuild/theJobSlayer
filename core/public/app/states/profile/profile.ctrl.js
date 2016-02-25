app.controller('profileCtrl', function ($scope, jobService, hero) {

    $scope.hero = hero;

    $scope.getJobs = function () {
      jobService.getJobs()
      .then(function(response){
        $scope.jobs = response;
      });
    };

    $scope.getJobs();

});
