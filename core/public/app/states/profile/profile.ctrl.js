app.controller('profileCtrl', function($scope, jobService, resourceService, hero, ModalService, authService, heroService, guildService) {

  $scope.hero = hero;

  $scope.getJobs = function() {
    jobService.getJobByAuthor(hero._id)
      .then(function(response) {
        $scope.jobs = response;
      });
  };

  $scope.getJobs();

  $scope.getResources = function() {
    resourceService.getResourceByAuthor(hero._id)
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

  $scope.getGuilds = function() {
    guildService.getGuildsByMember($scope.hero._id)
    .then(function(response){
      console.log(response);
      $scope.guilds = response;
    });
  };

  $scope.getGuilds();

  $scope.getHero = function(){
    authService.currentHero()
    .then(function(response){
      $scope.hero = response.data;
    });
  };

  $scope.updateHero = function(){
    delete $scope.hero.password;
    heroService.editHero($scope.hero)
    .then(function(response){
      $scope.getHero();
    });
  };

});
