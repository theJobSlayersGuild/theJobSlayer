app.controller('splashCtrl', function($state, $scope, ModalService, authService) {

  $scope.test = 'splashCtrl connected';

  $scope.hero = {
    email: "dood@dood.com",
    password: "dood"
  };

  $scope.user = false;

  $scope.openSignUpModal = function() {
    ModalService.showModal({
      templateUrl: "./app/modals/signup/signup.ctrl.html",
      controller: "signUpCtrl"
    }).then(function(modal) {
      modal.close.then(function(then) {
      });
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
