app.controller('profileCtrl', function($scope, jobService, resourceService, hero, ModalService, authService, heroService) {

  $scope.hero = hero;

  $scope.getJobs = function() {
    jobService.getJobs()
      .then(function(response) {
        $scope.jobs = response;
      });
  };

  $scope.getJobs();

  $scope.getResources = function() {
    resourceService.getResources()
      .then(function(response) {
        $scope.resources = response;
      });
  };

  $scope.getResources();

  $scope.openProfileImageModal = function() {
    ModalService.showModal({
      templateUrl: "./app/modals/editImage/editimage.ctrl.html",
      controller: "editImageCtrl"
    }).then(function(modal) {
      modal.close.then(function(newImageUrl) {
        $scope.hero.profileImage = newImageUrl;
        $scope.updateHero();
      });
    });
  };

  $scope.getHero = function(){
    authService.currentHero()
    .then(function(response){
      $scope.hero = response.data;
    });
  };

  $scope.updateHero = function(){
    heroService.editHero($scope.hero)
    .then(function(response){
      $scope.getHero();
    });
  };

});
