app.controller('splashCtrl', function($state, $scope, ModalService, authService) {

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
    authService.login(hero)
    .then(function(response){
      console.log(response);
      $state.go('home');
    });
  };

});
