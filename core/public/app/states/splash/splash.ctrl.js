app.controller('splashCtrl', function($scope, ModalService, jobListService) {

  $scope.test = 'splashCtrl connected';

  $scope.openSignUpModal = function() {
    ModalService.showModal({
      templateUrl: "./app/modals/signup/signup.ctrl.html",
      controller: "signUpCtrl"
    }).then(function(modal) {
      // Function that runs when modal closes
      modal.close.then(function(then) {});
    });
  };

  $scope.submitLogin = function(hero) {
    console.log(hero);
    jobListService.submitHero(hero)
    .then(function(response){
      console.log(response);
    });
  };

});
